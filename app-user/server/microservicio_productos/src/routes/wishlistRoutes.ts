import { Router } from "express";
import { body, param } from "express-validator";
import { WishlistDAO } from "../DAO/WishlistDAO";


const router = Router()

router.post('/',
    WishlistDAO.crearWishlist
)

export default router