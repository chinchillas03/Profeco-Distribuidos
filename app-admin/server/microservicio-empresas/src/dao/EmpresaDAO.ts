import { Request, Response } from 'express';
import Empresa from '../models/Empresa';
import mongoose from 'mongoose';
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

        static eliminarEmpresa = async (req: Request, res: Response): Promise<void> => {
            const { id } = req.params; 
        
            try {
        
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).send('Invalid company ID');
                return;
            }

            const result = await Empresa.deleteOne({ _id: id });
        
            
            if (result.deletedCount === 0) {
                res.status(404).send('Company not found');
            } else {
                res.status(200).send('Company deleted successfully');
              
            }
            } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting company');
            }
        };
}
