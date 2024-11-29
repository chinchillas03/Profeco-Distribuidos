import type { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const manejarErroresDeEntrada = (Request, Response, NextFunction) => {
    let errores = validationResult(Request)
    if(!errores.isEmpty()){
        return Response.status(400).json({errores:errores.array()})
    }
    NextFunction()
}