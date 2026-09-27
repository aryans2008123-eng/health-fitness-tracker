const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Health Tracker API is running',
  });
});

app.use((err, req, res, next) => {
  console.error('Unexpected server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

module.exports = app;
