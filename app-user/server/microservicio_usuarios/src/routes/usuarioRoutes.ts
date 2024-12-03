import {Router} from 'express';
import {body, param} from 'express-validator';
import {UsuarioDAO} from '../DAO/UsuarioDAO';
import {manejarErroresDeEntrada} from '../middleware/validacion';
import Usuario from '../models/Usuario';

const router = Router()

router.post('/', 
    body('nombre')
        .notEmpty().withMessage('El nombre del usuario es obligatorio'),
    body('apellido')
        .notEmpty().withMessage('El apellido del usuario es obligatorio'),
    body('email')
        .notEmpty().withMessage('El email del usuario es obligatorio'),
    body('password')
        .notEmpty().withMessage('La contraseña del usuario es obligatoria'),
    manejarErroresDeEntrada,
    UsuarioDAO.crearUsuario
)

router.get('/', 
    UsuarioDAO.consultarTodosLosUsuarios
)

router.get('/:id', 
    param('id').isMongoId().withMessage('id no valido'),
    manejarErroresDeEntrada,
    UsuarioDAO.consultarUsuarioPorId
)

router.put('/:id', 
    param('id').isMongoId().withMessage('id no valido'),
    body('nombre')
        .notEmpty().withMessage('El nombre del usuario es obligatorio'),
    body('apellido')
        .notEmpty().withMessage('El apellido del usuario es obligatorio'),
    body('email')
        .notEmpty().withMessage('El email del usuario es obligatorio'),
    body('password')
        .notEmpty().withMessage('La contraseña del usuario es obligatoria'),
    manejarErroresDeEntrada,
    UsuarioDAO.actualizarUsuario
)

router.delete('/:id', 
    param('id').isMongoId().withMessage('id no valido'),
    manejarErroresDeEntrada,
    UsuarioDAO.eliminarUsuario
)

router.post(
'/validate', UsuarioDAO.validarUsuario
)

export default router;