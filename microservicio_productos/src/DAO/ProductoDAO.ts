import type { Request, Response } from "express"
import Producto from "../models/Producto"

export class ProductoDAO {
    static crearProducto = async (Request, Response) =>{
        const producto = new Producto(Request.body)
        try {
            await producto.save()
            Response.send('Producto creado correctamente')
        } catch (error) {
            console.log(error)
        }
    }
    static consultarTodosLosProductos = async (Request, Response) =>{
        try {
            const producto = await Producto.find({})
            Response.json(producto)
        } catch (error) {
            console.log(error)
        }
    }
    static consultarProductoPorId = async (Request, Response) =>{
        const {id} = Request.params
        try {
            const producto = await Producto.findById(id)
            if(!producto){
                const error = new Error('Producto no encontrado')
                return Response.status(404).json({error: error.message})
            }
            Response.json(producto)
        } catch (error) {
            console.log(error)
        }
    }
    static actualizarProducto = async (Request, Response) =>{
        const {id} = Request.params
        try {
            const producto = await Producto.findById(id)
            if(!producto){
                const error = new Error('Producto no encontrado')
                return Response.status(404).json({error: error.message})
            }
            producto.nombre = Request.body.nombre
            producto.precio = Request.body.precio
            await producto.save()
            Response.send('Producto actualizado')
        } catch (error) {
            console.log(error)
        }
    }
    static eliminarProducto = async (Request, Response) =>{
        const {id} = Request.params
        try {
            const producto = await Producto.findById(id)
            if(!producto){
                const error = new Error('Producto no encontrado')
                return Response.status(404).json({error: error.message})
            }
            await producto.deleteOne()
            Response.send('Producto eliminado')
        } catch (error) {
            console.log(error)
        }
    }
}