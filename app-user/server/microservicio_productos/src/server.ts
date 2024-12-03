import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db";
import productoRoutes from './routes/productoRoutes';
import cors from 'cors';


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors()); 

app.use('/api/productos', productoRoutes); 


export default app;