import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

console.log('Servidor de autenticación funcionando');
export default app;