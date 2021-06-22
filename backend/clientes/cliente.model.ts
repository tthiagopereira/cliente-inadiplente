import * as mongoose from 'mongoose'

export interface Cliente extends  mongoose.Document {
    name:   string,
    email:  string,
    status: string,
    titulo: string,
    valor: string,
    desde: string
}

const clienteSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    status: {type: String},
    titulo: {type: String},
    valor: {type: String},
    desde: {type: Date},
})


export const Cliente = mongoose.model<Cliente>('Cliente', clienteSchema)
