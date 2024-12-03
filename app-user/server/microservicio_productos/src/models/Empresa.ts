import mongoose, { Schema, Document } from 'mongoose';
import Producto from './Producto'

export interface IEmpresa extends Document {
    rfc: string;
    nombre: string;
    businessLine: string;
    dateAdded: string;
    reports: mongoose.Types.ObjectId[]; 
    products: mongoose.Types.ObjectId[]; 
}

const EmpresaSchema: Schema = new Schema(
    {
        rfc: {
            type: String,
            required: true,
            trim: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        businessLine: { 
            type: String,
            required: true,
        },
        dateAdded: {
            type: String,
            required: true,
        },
        reports: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reporte' }], 
            required: true,
        },

        products: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: Producto }], 
            required: true,
        },
    },
    { timestamps: true }
);

const Empresa = mongoose.model<IEmpresa>('Empresa', EmpresaSchema);

export default Empresa;
