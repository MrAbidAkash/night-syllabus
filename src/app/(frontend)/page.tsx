import buildConfig from '@/payload.config'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { getPayload } from 'payload'
import LandingPage from './_components/LandingPage'
// import { unstable_noStore as noStore } from 'next/cache'

const page = async () => {
  // noStore()
  // await mongooseAdapter({ url: process.env.DATABASE_URL || '' })
  // const payload = await getPayload({ config: buildConfig })

  const page = {
    docs: [
      {
        pricing: [
          {
            id: 'How to Satisfy a Woman in Bed – Course',
            label: 'How to Satisfy a Woman in Bed – Course',
            price: 999,
            bdPrice: '999',
            discount: 5000,
            // bdPrice: '২৪৯',
            // description: 'Basic description২',
          },
        ],
      },
    ],
  }
  // const page = await payload.find({
  //   collection: 'product-landing',
  // })

  //   console.log('page.docs', page)

  return (
    <div>
      <LandingPage page={page.docs[0]} />
    </div>
  )
}

export default page
