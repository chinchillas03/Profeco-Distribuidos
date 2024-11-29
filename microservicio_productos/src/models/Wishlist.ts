import mongoose, {Schema, Document, PopulatedDoc, Types} from "mongoose";
import { IProducto } from "./Producto";

export interface IWishlist extends Document {
    productos: PopulatedDoc<IProducto & Document>[]
}

const WishlistSchema : Schema = new Schema({
    productos:[
        {
            type: Types.ObjectId,
            ref: 'Producto'
        }
    ]
}, {timestamps: true})

const Wishlist = mongoose.model<IWishlist>('Whishlist', WishlistSchema)
export default Wishlist