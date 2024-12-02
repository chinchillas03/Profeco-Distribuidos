import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const manejarErroresDeEntrada = (req: Request, res: Response, next: NextFunction) => {
 
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    next();
};
