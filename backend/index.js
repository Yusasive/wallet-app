// index.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Define your API routes here

// Route for creating a new wallet
app.post('/api/wallets/create', async (req, res) => {
  try {
    // Authenticate the user (replace with your authentication method)
    const userToken = req.headers.authorization; // Example: Bearer <user_token>

   
    const response = await axios.post(
      'https://api-sandbox.circle.com/v1/wallets',
      {
        name: req.body.name,
        type: 'personal', 
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CIRCLE_API_KEY}`,
          'Content-Type': 'application/json',
          'Client-Id': 'your-client-id', 
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error creating wallet:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
