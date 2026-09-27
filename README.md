# Health & Fitness Tracker

This project is a beginner-friendly health and fitness tracker built with the MERN stack.

## Requirements

- Node.js
- MongoDB
- VS Code

## Installation

1. Open the project folder in VS Code.
2. Open a terminal in the project root.
3. Install the backend dependencies:

```bash
cd server
npm install
```

4. Install the frontend dependencies:

```bash
cd ../client
npm install
```

## Environment setup

Create a file named `server/.env` based on the example file in the project root.

```bash
copy ..\.env.example server\.env
```

On Mac or Linux, you can use:

```bash
cp ../.env.example server/.env
```

Your `server/.env` file should look like this:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/health_fitness_tracker
CLIENT_URL=http://localhost:5173
```

## Running the backend

```bash
cd server
npm run dev
```

The backend should run on:

```text
http://localhost:5000
```

## Running the frontend

```bash
cd client
npm run dev
```

The frontend should run on:

```text
http://localhost:5173
```

## Health check

Open this URL in the browser or Postman:

```text
http://localhost:5000/api/health
```

You should see:

```json
{
  "success": true,
  "message": "Health Tracker API is running"
}
```

## Phase 1 status

Phase 1 includes:

- React + Vite frontend setup
- Express backend setup
- MongoDB connection logic
- Simple health check API
- Frontend status page for the backend connection

This project does not include authentication, fields, measurements, or dashboard features yet.
