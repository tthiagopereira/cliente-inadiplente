"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose = require("mongoose");
const clienteSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    status: { type: String },
    titulo: { type: String },
    valor: { type: String },
    desde: { type: Date },
});
exports.Cliente = mongoose.model('Cliente', clienteSchema);
