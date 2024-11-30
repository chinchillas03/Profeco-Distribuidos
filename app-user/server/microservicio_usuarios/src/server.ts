import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db";
import usuarioRoutes from "./routes/usuarioRoutes";

dotenv.config()

connectDB()

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api/usuarios', usuarioRoutes)

export default app