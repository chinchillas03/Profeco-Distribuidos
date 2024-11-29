import type { Request, Response } from "express";
import Usuario from "../models/Usuario";
import { Types } from "mongoose";


export class UsuarioDAO {
    static crearUsuario = async (Request, Response) => {
        const usuario = new Usuario(Request.body)
        try {
            await usuario.save()
            Response.send('Usuario creado correctamente')
        } catch (error) {
            console.log(error)
        }
    }
    static consultarTodosLosUsuarios = async (Request, Response) => {
        try {
            const usuario = await Usuario.find({})
            Response.json(usuario)
        } catch (error) {
            console.log(error)
        }
    }
    static consultarUsuarioPorId = async (Request, Response) => {
        const { id } = Request.params
        try {
            const usuario = await Usuario.findById(id)
            if (!usuario) {
                const error = new Error('Usuario no encontrado')
                return Response.status(404).json({ error: error.message })
            }
            Response.json(usuario)
        } catch (error) {
            console.log(error)
        }
    }
    static actualizarUsuario = async (Request, Response) => {
        const { id } = Request.params
        try {
            await Usuario.findByIdAndUpdate(id, Request.body)
            Response.send('Usuario actualizado correctamente')
        } catch (error) {
            console.log(error)
        }
    }
    static eliminarUsuario = async (Request, Response) => {
        const { id } = Request.params
        try {
            await Usuario.findByIdAndDelete(id)
            Response.send('Usuario eliminado correctamente')
        } catch (error) {
            console.log(error)
        }
    }
}