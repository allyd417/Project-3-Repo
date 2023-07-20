const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // You can change this to any available port number you prefer

const PETFINDER_API_KEY = 'YOUR_PETFINDER_API_KEY';
const PETFINDER_API_SECRET = 'YOUR_PETFINDER_API_SECRET';

app.get('/get-token', async (req, res) => {
  try {
    const response = await axios.post(`https://api.petfinder.com/v2/oauth2/token`, {
      grant_type: 'client_credentials',
      client_id: PETFINDER_API_KEY,
      client_secret: PETFINDER_API_SECRET,
    });

    const { access_token } = response.data;

    res.json({ token: access_token });
  } catch (error) {
    console.error('Error fetching Petfinder API token:', error.message);
    res.status(500).json({ error: 'Failed to fetch token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
