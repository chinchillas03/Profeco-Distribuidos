import mongoose, { Schema, Document } from 'mongoose';

export interface IEmpresa extends Document {
    rfc: string;
    nombre: string;
    businessLine: string;
    dateAdded: string;
    reports: string[]; // Specify the type of array elements
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
        businessLine: { // Corrected typo
            type: String,
            required: true,
        },
        dateAdded: {
            type: String,
            required: true,
        },
        reports: {
            type: [String], // Array of strings
            required: true,
        },
    },
    { timestamps: true }
);

const Empresa = mongoose.model<IEmpresa>('Empresa', EmpresaSchema);

export default Empresa;
