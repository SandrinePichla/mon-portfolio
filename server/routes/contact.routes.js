const express = require('express');
const nodemailer = require('nodemailer');

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
      from: process.env.EMAIL_USER, // Changé : utiliser EMAIL_USER comme expéditeur
      replyTo: email, // Ajouté : permet de répondre directement à l'utilisateur
      to: process.env.EMAIL_USER,
      subject: `Contact Portfolio: ${subject}`,
      html: `
        <h3>Nouveau message depuis votre portfolio</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l’envoi.' });
  }
});

module.exports = router;