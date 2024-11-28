import mongoose, {Schema, Document, PopulatedDoc, Types} from "mongoose";
import { IPromocion } from "./Promocion";

export interface IProducto extends Document {
    nombre: string
    precio: number
    promociones: PopulatedDoc<IPromocion & Document>[]
}

const ProductoSchema : Schema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    promociones:[
        {
            type: Types.ObjectId,
            ref: 'Promocion'
        }
    ]
}, {timestamps: true})

const Producto = mongoose.model<IProducto>('Producto', ProductoSchema)
export default Producto