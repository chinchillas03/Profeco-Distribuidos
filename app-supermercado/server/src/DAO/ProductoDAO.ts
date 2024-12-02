import { Request, Response } from 'express';
import Producto from '../models/Producto';
import mongoose from 'mongoose';
import Empresa from '../models/Empresa'

export class ProductoDAO {
    static crearProducto = async (req: Request, res: Response): Promise<void> => {
        try {
            const producto = new Producto(req.body);
            await producto.save();

            res.status(201).send('Producto creado correctamente');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el producto');
        }
    };

    static consultarTodosLosProductos = async (req: Request, res: Response): Promise<void> => {
        try {
            const productos = await Producto.find();
            res.status(200).json(productos);
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error al obtener los productos');
        }
    };

    static consultarProductoPorId = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).send('ID de producto no válido');
                return;
            }

            const producto = await Producto.findById(id);
            if (!producto) {
                res.status(404).send('Producto no encontrado');
                return;
            }

            res.status(200).json(producto);
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error al obtener el producto');
        }
    };

    static actualizarProducto = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).send('ID de producto no válido');
                return;
            }

            const producto = await Producto.findById(id);
            if (!producto) {
                res.status(404).send('Producto no encontrado');
                return;
            }

            producto.nombre = req.body.nombre;
            producto.precio = req.body.precio;
            producto.descripcion = req.body.descripcion;

            await producto.save();
            res.status(200).send('Producto actualizado correctamente');
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error al actualizar el producto');
        }
    };

    static eliminarProducto = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).send('ID de producto no válido');
                return;
            }

            const result = await Producto.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                res.status(404).send('Producto no encontrado');
            } else {
                res.status(200).send('Producto eliminado correctamente');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error al eliminar el producto');
        }
    };
    static agregarProductoALista = async (req: Request, res: Response): Promise<void> => {
        const { rfc } = req.params;
        const { nombre, precio, descripcion } = req.body;  // Receiving product name, price, and description
      
        try {
    
            if (!rfc) {
                res.status(400).send("RFC de empresa inválido");
                return;
            }
    
            if (!nombre || !precio || !descripcion) {
                res.status(400).send("Faltan datos del producto");
                return;
            }
    
     
            const nuevoProducto = new Producto({
                nombre,
                precio,
                descripcion
            });
    
            await nuevoProducto.save();
    
          
            const empresa = await Empresa.findOne({ rfc });
    
            if (!empresa) {
                res.status(404).send("Empresa no encontrada");
                return;
            }
    
            
            if (empresa.products.includes(nuevoProducto._id as mongoose.Types.ObjectId)) {
                res.status(400).send("El producto ya está agregado a esta empresa");
                return;
            }
    
          
            empresa.products.push(nuevoProducto._id as mongoose.Types.ObjectId);
    

            await empresa.save();
    
            res.status(200).send("Producto agregado correctamente a la empresa");
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al agregar el producto");
        }
    };
}
