import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Contact server listening on http://localhost:${port}`);
});

