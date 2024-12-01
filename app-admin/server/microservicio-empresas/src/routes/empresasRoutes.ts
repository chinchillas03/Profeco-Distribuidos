import { Router } from 'express';
import { EmpresaDAO } from '../dao/EmpresaDAO';

const router = Router();

router.post('/', (req, res) => {
    EmpresaDAO.crearEmpresa(req, res); 
});

export default router;
