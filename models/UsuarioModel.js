const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    nome: String,
    email: String,
    nivel: Number,
    senha: String
});

module.exports = mongoose.model("Usuario", usuarioSchema);