import { Request, Response } from 'express';
import Empresa from '../models/Empresa';
const { MongoClient } = require('mongodb');

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
    static obtenerEmpresas = async (req: Request, res: Response): Promise<void> => {
        try {
            const empresas = await Empresa.find(); 
            res.status(200).json(empresas); 
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener las empresas');
        }
    };
}
