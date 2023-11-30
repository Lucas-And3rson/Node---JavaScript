const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carroSchema = Schema({
    nome: String,
    marca: String,
    ano: Number,
    valor: Number
});

module.exports = mongoose.model("Carro", carroSchema);