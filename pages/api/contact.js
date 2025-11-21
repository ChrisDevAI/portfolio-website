import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New message from ${name}`,
        text: `
    Name: ${name}
    Email: ${email}
    Message:
    ${message}
       `,
    };

await transporter.sendMail(mailOptions);


    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ success: false });
  }
}
