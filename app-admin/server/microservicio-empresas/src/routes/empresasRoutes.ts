import { Router } from 'express';
import { EmpresaDAO } from '../dao/EmpresaDAO';

const router = Router();

router.post('/', (req, res) => {
    EmpresaDAO.crearEmpresa(req, res); 
});

router.get('/', (req, res)=>{

    EmpresaDAO.obtenerEmpresas(req, res); 
})  


router.delete('/:id', (req, res) =>{
    EmpresaDAO.eliminarEmpresa(req, res);
})

export default router;
