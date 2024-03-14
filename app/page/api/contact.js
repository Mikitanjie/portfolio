import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    });



    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Message from ${name}`,
      text: `From: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.error('Error sending mail:', err);
        res.status(500).send({
          message: 'Something went wrong. Please try again later',
        });
      } else {
        res.send({
          message: 'Thanks for contacting me. I will get back to you shortly',
        });
      }
    });

  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
