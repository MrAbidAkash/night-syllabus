/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Endpoint } from 'payload'
import { grantToken } from '../lib/bkash'
import { getPayload } from '@/lib/payload'
import { sendCourseEmail } from '@/lib/sendCourseEmail'

const BASE_URL = 'https://tokenized.pay.bka.sh/v1.2.0-beta'

export const createPayment: Endpoint = {
  path: '/bkash/create',
  method: 'post',
  handler: async (req: any) => {
    console.log('hi_1')

    // console.log('body:', await req.json())

    const payloadData = await req.json()

    const payload = await getPayload()

    const { amount, callbackURL, payerReference, customerInfo } = payloadData

    console.log('hi_2 :', payloadData)

    const idToken = await grantToken()

    console.log('token res', idToken)

    const resp = await fetch('https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: idToken,
        'x-app-key': process.env.BK_APP_KEY!,
      },
      body: JSON.stringify({
        mode: '0011',
        amount: amount.toString(),
        currency: 'BDT',
        intent: 'sale',
        merchantInvoiceNumber: `INV_${Date.now()}`,
        callbackURL,
        payerReference: payerReference || '',
      }),
    })

    const data = await resp.json()

    console.log('data', data)

    if (data?.statusMessage !== 'Successful') {
      return Response.json({
        error: data?.message,
      })
    }

    console.log('daaoo', data)

    const payment = await payload.create({
      collection: 'bkash-payments',
      data: {
        paymentID: data.paymentID,
        amount: data.amount,
        transactionStatus: data.transactionStatus || 'Pending',
        payerReference: payerReference || '',
        // pricingId,
        // size,
        customerInfo,
      },
      draft: true,
    })

    console.log('resp', payment)

    return Response.json(data)
  },
}

// export const executePayment: Endpoint = {
//   path: '/bkash/execute',
//   method: 'post',
//   handler: async (req: any) => {
//     const { paymentID } = req.body
//     const idToken = await grantToken()

//     const payload = await getPayload()

//     const resp = await fetch(
//       'https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/execute',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: idToken,
//           'x-app-key': process.env.BK_APP_KEY!,
//         },
//         body: JSON.stringify({ paymentID }),
//       },
//     )

//     const data = await resp.json()

//     await payload.update({
//       collection: 'bkash-payments',
//       where: { paymentID: { equals: paymentID } },
//       data: {
//         transactionStatus: data.transactionStatus,
//         trxID: data.trxID,
//       },
//     })

//     return Response.json(data)
//   },
// }

export const bkashCallback: Endpoint = {
  path: '/bkash/callback',
  method: 'get',
  handler: async (req: any) => {
    const payload = await getPayload()

    const url = new URL(req.url)

    console.log('FULL URL:', url.toString())
    console.log('SEARCH PARAMS:', url.searchParams.toString())

    const paymentID = url.searchParams.get('paymentID')
    const status = url.searchParams.get('status')
    const signature = url.searchParams.get('signature')
    const apiVersion = url.searchParams.get('apiVersion')

    console.log({
      paymentID,
      status,
      signature,
      apiVersion,
    })

    if (!paymentID || status !== 'success') {
      return Response.redirect(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-fail?reason=${status}`,
      )
    }

    try {
      const idToken = await grantToken()

      // ✅ Execute payment
      const resp = await fetch(`${BASE_URL}/tokenized/checkout/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: idToken,
          'x-app-key': process.env.BK_APP_KEY!,
        },
        body: JSON.stringify({ paymentID }),
      })

      const data = await resp.json()
      // console.log('bKash execute response:', data)

      // =============================
      // ✅ PAYMENT SUCCESS
      // =============================
      if (data.transactionStatus === 'Completed') {
        const user: any = await payload.find({
          collection: 'bkash-payments',
          where: { paymentID: { equals: paymentID } },
          select: {
            customerInfo: true,
          },
        })

        console.log('User found:', user)

        await payload.update({
          collection: 'bkash-payments',
          where: { paymentID: { equals: paymentID } },
          data: {
            amount: parseFloat(data.amount) || 0,
            currency: data.currency || 'BDT',
            merchantInvoiceNo: data.merchantInvoiceNumber,
            // payerReference: data.payerReference || 'anonymous',
            transactionStatus: 'Completed',
            trxID: data.trxID,
            user: data.customerMsisdn || '',
          },
        })

        // ✅ SEND EMAIL
        if (user.docs && user.docs.length > 0) {
          await sendCourseEmail({
            to: user.docs[0].customerInfo?.email || '',
            paymentID,
          })
        }

        // AFTER payload.update(...)
        // AFTER sendCourseEmail(...)

        const paymentRecord = await payload.find({
          collection: 'bkash-payments',
          where: { paymentID: { equals: paymentID } },
        })

        const paymentDoc: any = paymentRecord.docs?.[0]
        console.log('eee', paymentDoc)
        if (!paymentDoc) throw new Error('Payment not found')

        const orderId = `purchase_${paymentID}_${data.trxID}`

        const purchaseType = paymentDoc.payerReference === 'partial' ? 'partial' : 'full'

        const contents = [
          {
            content_type: 'product',
            content_id: paymentDoc.id || paymentDoc.pricingId,
            content_name: paymentDoc.productInfo?.label,
            price: paymentDoc.productInfo?.price / 2 || paymentDoc.amount / 2,
            quantity: 1,
          },
        ]

        const facebookEventData = {
          platform: 'facebook',
          event_name: 'Purchase',
          event_id: orderId,
          customer_info: {
            name: paymentDoc.customerInfo?.name,
            phone: paymentDoc.customerInfo?.phone,
            address: paymentDoc.customerInfo?.address,
            email: paymentDoc.customerInfo?.email,
          },
          currency: 'BDT',
          value: paymentDoc.amount / 2,
          custom_data: {
            purchase_type: purchaseType,
            content_ids: [paymentDoc.id || paymentDoc.pricingId],
            content_type: 'product',
            product_name: paymentDoc.productInfo?.label,
            productPrice: paymentDoc.productInfo?.price / 2 || paymentDoc.amount / 2,
          },
        }

        const tiktokEventData = {
          platform: 'tiktok',
          event_name: 'PlaceAnOrder',
          event_id: orderId,
          value: paymentDoc.amount,
          currency: 'BDT',
          contents,
          customer: {
            name: paymentDoc.customerInfo?.name,
            email: paymentDoc.customerInfo?.email,
            phone: paymentDoc.customerInfo?.phone,
            address: paymentDoc.customerInfo?.address,
          },
          extra: {
            purchase_type: purchaseType,
            productPrice: paymentDoc.productInfo?.price,
            size: paymentDoc.size,
          },
        }

        // 🔥 Call your existing endpoint (same format)
        await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/fb-conversion`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(facebookEventData),
          }),
          fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/fb-conversion`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tiktokEventData),
          }),
        ])

        console.log('Purchase events sent from backend')

        return Response.redirect(
          `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-success?paymentID=${paymentID}`,
        )
      }

      // =============================
      // ❌ PAYMENT FAILED
      // =============================
      await payload.update({
        collection: 'bkash-payments',
        where: { paymentID: { equals: paymentID } },
        data: {
          transactionStatus: data.transactionStatus || 'Failed',
          amount: parseFloat(data.amount) || 0,
          currency: data.currency || 'BDT',
          merchantInvoiceNo: data.merchantInvoiceNumber,
        },
      })

      return Response.redirect(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-fail?paymentID=${paymentID}`,
      )
    } catch (error) {
      console.error('bKash callback error:', error)

      await payload.update({
        collection: 'bkash-payments',
        where: { paymentID: { equals: paymentID } },
        data: {
          transactionStatus: 'Error',
        },
      })

      return Response.redirect(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/payment-fail?reason=server_error`,
      )
    }
  },
}
