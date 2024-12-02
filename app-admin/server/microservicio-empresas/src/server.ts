import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/db'
import empresaRoutes from './routes/empresasRoutes'
import cors from "cors";

dotenv.config()

connectDB()

const app  = express()

app.use(express.json())
app.use(cors()); 

app.use('/api/empresas/', empresaRoutes )

export default app