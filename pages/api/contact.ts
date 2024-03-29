import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === 'POST') {
    const { name, email, message } = await req.body.data;

    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      auth: {
        user: username,
        pass: password,
      },
    });

    try {
      const mail = await transporter.sendMail({
        from: username,
        to: myEmail,
        replyTo: email,
        subject: `New message from ${name}`,
        html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false });
    }
  }
}
