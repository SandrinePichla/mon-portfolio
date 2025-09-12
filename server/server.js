const cors = require('cors');

// Autoriser Netlify
app.use(cors({
  origin: "https://taupe-lollipop-8d4dc7.netlify.app", 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));