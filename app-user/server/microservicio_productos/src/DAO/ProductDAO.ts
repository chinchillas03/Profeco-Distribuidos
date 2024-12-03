import Producto from "../models/Producto";  
import Empresa from "../models/Empresa";  
import { Request, Response } from 'express';

class ProductoDAO {

    static obtenerProductosRegistrados = async (req: Request, res: Response): Promise<void> => {
        try {
     
            const empresas = await Empresa.find().populate('productos'); 

            if (!empresas) {
                res.status(404).send("No se encontraron empresas");
                return;
            }

            const productosRegistrados = empresas.map(empresa => ({
                empresa: empresa.rfc,
                productos: empresa.products
            }));

            res.status(200).json(productosRegistrados);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los productos registrados");
        }
    };
}

export default ProductoDAO;