const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = require('./app');
const { connectDatabase } = require('./config/db');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDatabase();
    console.log('MongoDB connection verified.');
  } catch (error) {
    console.error('MongoDB connection failed.');
    console.error('The server will still start so the health endpoint can respond, but database features will not work until MongoDB is running.');
    console.error('Please check your MONGO_URI in the .env file and make sure MongoDB is running.');
  }

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
