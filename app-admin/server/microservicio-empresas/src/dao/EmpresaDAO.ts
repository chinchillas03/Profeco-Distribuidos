import { Request, Response } from "express";
import Empresa from "../models/Empresa";
import mongoose from "mongoose";
const { MongoClient } = require("mongodb");

export class EmpresaDAO {
  static crearEmpresa = async (req: Request, res: Response): Promise<void> => {
    try {
      const empresa = new Empresa(req.body);
      await empresa.save();

      res.status(201).send("Producto creado correctamente");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al crear el producto");
    }
  };
  static obtenerEmpresas = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const empresas = await Empresa.find();
      res.status(200).json(empresas);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener las empresas");
    }
  };

  static eliminarEmpresa = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { id } = req.params;

    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send("Invalid company ID");
        return;
      }

      const result = await Empresa.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        res.status(404).send("Company not found");
      } else {
        res.status(200).send("Company deleted successfully");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting company");
    }
  };    

  static agregarProductoALista = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { productoId } = req.body;
  
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send("ID de empresa inválido");
        return;
      }
  
      if (!mongoose.Types.ObjectId.isValid(productoId)) {
        res.status(400).send("ID de producto inválido");
        return;
      }
  
      const empresa = await Empresa.findById(id);

      if (!empresa) {
        res.status(404).send("Empresa no encontrada");
        return;
      }
  
 
      if (empresa.products.includes(productoId)) {
        res.status(400).send("El producto ya está agregado a esta empresa");
        return;
      }
  
      empresa.products.push(productoId);
  
      await empresa.save();
  
 
      res.status(200).send("Producto agregado correctamente a la empresa");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al agregar el producto");
    }
  };
}
