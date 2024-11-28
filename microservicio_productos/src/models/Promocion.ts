import mongoose, {Schema, Document} from "mongoose";

export interface IPromocion extends Document{
    nombre: string
    monto: number
}

export const PromocionSchema : Schema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    monto: {
        type: Number,
        require: true
    }
}, {timestamps: true})

const Promocion = mongoose.model<IPromocion>('Promocion', PromocionSchema)
export default Promocion