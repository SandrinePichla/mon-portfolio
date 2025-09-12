const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    // Appel API Brevo
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: process.env.BREVO_USER },
        to: [{ email: process.env.BREVO_USER }],
        replyTo: { email },
        subject: `Contact Portfolio: ${subject}`,
        htmlContent: `
          <h3>Nouveau message depuis votre portfolio</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    res.status(200).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error("Erreur envoi mail API:", error.response?.data || error.message);
    res.status(500).json({ error: 'Erreur lors de l’envoi du message.' });
  }
});

module.exports = router;
