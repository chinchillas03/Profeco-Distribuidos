import ProductoDAO from "../DAO/ProductDAO";
import { Router } from 'express';

const router = Router();


router.get('/productos-registrados', ProductoDAO.obtenerProductosRegistrados); 

export default router;