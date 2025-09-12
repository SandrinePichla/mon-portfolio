const isProduction = import.meta.env.MODE === 'production';

  export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://mon-portfolio-production-49a8.up.railway.app'  // Remplacez par votre vraie URL Railway
  : 'http://localhost:4000';