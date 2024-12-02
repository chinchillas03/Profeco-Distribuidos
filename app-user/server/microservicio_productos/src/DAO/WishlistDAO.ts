import type { Request, Response } from "express"
import Wishlist from "../models/Wishlist";
import Producto from "../../../../../app-supermercado/server/src/models/Producto";

export class WishlistDAO {
    static crearWishlist = async (Request, Response) => {
        const wishlist = new Wishlist(Request.body)
        try {
            await wishlist.save()
            Response.send('Wishlist creada correctamente')
        } catch (error) {
            console.log(error)
        }
    }
    static consultarProductosWishlist = async (Request, Response) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}