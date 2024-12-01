import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db"
import productoRoutes from './routes/productoRoutes'
import wishlistRoutes from './routes/wishlistRoutes'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/productos', productoRoutes)
app.use('/api/wishlist', wishlistRoutes)

export default app