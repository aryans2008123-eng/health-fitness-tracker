const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'https://health-fitness-tracker-491f.onrender.com',
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    app: 'Health & Fitness Tracker API',
    message: 'This is the backend API. Use /api/health to check server status.',
    endpoints: ['/api/health'],
  });
});

app.use('/api', healthRoutes);

app.use((err, req, res, next) => {
  console.error('Unexpected server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

module.exports = app;
