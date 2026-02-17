import nodemailer from 'nodemailer'

const downloads = [
  {
    title: 'Healthy Intimate Life',
    url: 'https://drive.google.com/file/d/1-RE0NnNuY5B2iqcRlItIYlj14KyciwUV/view',
    type: 'main',
  },
  {
    title: 'Healthy Sex Life',
    url: 'https://drive.google.com/file/d/1RukRJ07vSxn5A3WYL3N-vNZw0ks8kxH0/view',
    type: 'bonus',
  },
  {
    title: 'The Science Of Desire',
    url: 'https://drive.google.com/file/d/1SM1hTwqqJTTygjPVPlJCc-QPcvEwbryn/view',
    type: 'bonus',
  },
  {
    title: 'Golden Rules Of Intimacy',
    url: 'https://drive.google.com/file/d/1YSpe-dl-sQYY0rFOm3ZqYzqpedBOXavH/view',
    type: 'bonus',
  },
  {
    title: 'Daily Intimacy Guide – Real Q&A',
    url: 'https://drive.google.com/file/d/12s6qe5XtY2kDYLoaiorRPg3MgvW9sxfs/view',
    type: 'bonus',
  },
  {
    title: 'Erectile Dysfunction & Premature Ejaculation',
    url: 'https://drive.google.com/file/d/17Jkwp7u144UpOwkFJv8OHZ-Z3qC-DKLc/view',
    type: 'bonus',
  },
  {
    title: 'Female Period Problems & Intimate Health',
    url: 'https://drive.google.com/file/d/1woNy5ec65Wy9gicMSoK9deZumZvy-vHn/view',
    type: 'bonus',
  },
]

export async function sendCourseEmail({ to, paymentID }: { to: string; paymentID: string }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const courseVideosLink =
    'https://drive.google.com/drive/folders/1W2Vy8A2SNI3RSR0HtHqHTNYIPmxLYWEl?usp=sharing'

  // Generate HTML list dynamically
  const generateList = (items: typeof downloads) =>
    items
      .map((item) => `<li>📘 <a href="${item.url}" target="_blank">${item.title}</a></li>`)
      .join('')

  const html = `
    <h2>🎉 Payment Successful!</h2>
    <p>Your payment ID: <b>${paymentID}</b></p>

    <p>Here are your resources:</p>

    <ul>
      <li>📹 <a href="${courseVideosLink}" target="_blank">Course Videos</a></li>
    </ul>
    <h3>🎁 Bonus Books</h3>
    <ul>
      ${generateList(downloads)}
    </ul>

    <p>Thank you for your purchase ❤️</p>
  `

  await transporter.sendMail({
    from: `"Healthy Intimate Life" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Your Course Access – Payment Successful',
    html,
  })
}
