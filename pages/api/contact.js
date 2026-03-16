// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { name, email, message, company } = req.body;

  // Honeypot spam trap
  if (company) {
    return res.status(200).json({ success: true });
  }

  const trimmedName = String(name || "").trim();
  const trimmedEmail = String(email || "").trim();
  const trimmedMessage = String(message || "").trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (trimmedName.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Name is too long",
    });
  }

  if (trimmedEmail.length > 320) {
    return res.status(400).json({
      success: false,
      message: "Email is too long",
    });
  }

  if (trimmedMessage.length > 5000) {
    return res.status(400).json({
      success: false,
      message: "Message is too long",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address",
    });
  }

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
      replyTo: trimmedEmail,
      subject: `New message from ${trimmedName}`,
      text: `Name: ${trimmedName}
Email: ${trimmedEmail}

Message:
${trimmedMessage}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
}
