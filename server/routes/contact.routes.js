import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `<p>${message}</p>`
    });

    res.status(200).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l’envoi.' });
  }
});

export default router;