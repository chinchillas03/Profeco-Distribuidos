import express, { Request, Response } from "express";
import { ProductoDAO } from "../DAO/ProductoDAO"; 

const router = express.Router();

// Definir las rutas y utilizar los métodos de ProductoDAO
router.post('/productos', ProductoDAO.crearProducto);
router.get('/productos', ProductoDAO.consultarTodosLosProductos);
router.get('/productos/:id', ProductoDAO.consultarProductoPorId);
router.put('/productos/:id', ProductoDAO.actualizarProducto);
router.delete('/productos/:id', ProductoDAO.eliminarProducto);
router.put("/empresa/:rfc/producto", ProductoDAO.agregarProductoALista);


export default router;