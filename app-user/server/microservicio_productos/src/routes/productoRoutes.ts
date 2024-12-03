import { Router } from 'express';
import ProductoDAO from "../DAO/ProductDAO";

const router = Router();

router.get('/productos-registrados', ProductoDAO.obtenerProductosRegistrados); 

export default router;