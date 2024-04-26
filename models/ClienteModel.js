const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clienteSchema = Schema({
    nome: String,
    cpf: String,
    tipo: String,
    mes: Number
});

module.exports = mongoose.model("Cliente", clienteSchema);