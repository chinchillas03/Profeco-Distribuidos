import mongoose, {Schema, Document, PopulatedDoc, Types} from "mongoose";

export interface IProducto extends Document {
    nombre: string
    precio: number
    descripcion: string
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
    descripcion: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

const Producto = mongoose.model<IProducto>('Producto', ProductoSchema)
export default Producto