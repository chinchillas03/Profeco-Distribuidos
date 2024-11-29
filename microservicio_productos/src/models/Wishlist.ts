import mongoose, {Schema, Document, PopulatedDoc, Types} from "mongoose";
import { IProducto } from "./Producto";

export interface IWishlist extends Document {
    nombre: string
    productos: PopulatedDoc<IProducto & Document>[]
}

const WishlistSchema : Schema = new Schema({
    nombre: {
        type: String, 
        required: true
    },
    productos:[
        {
            type: Types.ObjectId,
            ref: 'Producto'
        }
    ]
}, {timestamps: true})

const Wishlist = mongoose.model<IWishlist>('Whishlist', WishlistSchema)
export default Wishlist