// server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { dbconnect } from './config/database.config.js';

// Import routers
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import uploadRouter from './routers/upload.router.js';

dotenv.config();

// Initialize database connection
dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

// Use routers
app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

// Serve static files
const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

// Default route
app.get('*', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
