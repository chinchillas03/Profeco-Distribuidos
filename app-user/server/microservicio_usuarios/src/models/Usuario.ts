import mongoose from "mongoose";

export interface IUsuario extends mongoose.Document {
    nombre: string
    apellido: string
    email: string
    password: string
}

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

const Usuario = mongoose.model<IUsuario>('Usuario', UsuarioSchema);
export default Usuario;