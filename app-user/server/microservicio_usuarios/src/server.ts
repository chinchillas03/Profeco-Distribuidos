import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db";
import usuarioRoutes from "./routes/usuarioRoutes";

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/usuarios', usuarioRoutes)

export default app