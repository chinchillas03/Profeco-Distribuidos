import { Router } from "express";
import { body, param } from "express-validator";
import { ProductoDAO } from "../DAO/ProductoDAO";
import { manejarErroresDeEntrada } from "../middleware/validacion";

const router = Router()

router.post('/', 
    body('nombre')
        .notEmpty().withMessage('El nombre del producto es obligatorio'),
    body('precio')
        .notEmpty().withMessage('El precio del producto es obligatorio'),
    manejarErroresDeEntrada,
    ProductoDAO.crearProducto
)

router.get('/', 
    ProductoDAO.consultarTodosLosProductos
)

router.get('/:id', 
    param('id').isMongoId().withMessage('id no valido'),
    manejarErroresDeEntrada,
    ProductoDAO.consultarProductoPorId
)

router.put('/:id', 
    param('id').isMongoId().withMessage('id no valido'),
    body('nombre')
        .notEmpty().withMessage('El nombre del producto es obligatorio'),
    body('precio')
        .notEmpty().withMessage('El precio del producto es obligatorio'),
    manejarErroresDeEntrada,
    ProductoDAO.consultarProductoPorId
)

router.delete('/:id', 
    param('id').isMongoId().withMessage('id no valido'),
    manejarErroresDeEntrada,
    ProductoDAO.consultarProductoPorId
)

export default router