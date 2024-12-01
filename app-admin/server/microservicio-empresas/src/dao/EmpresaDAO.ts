import { Request, Response } from 'express';
import Empresa from '../models/Empresa';

export class EmpresaDAO {
    static crearEmpresa = async (req: Request, res: Response): Promise<void> => {
        try {
            const empresa = new Empresa(req.body);
            await empresa.save(); 

            res.status(201).send('Producto creado correctamente'); 
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el producto'); 
        }
    };
}
