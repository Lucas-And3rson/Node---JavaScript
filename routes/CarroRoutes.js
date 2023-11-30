const express = require('express');
const routes = express.Router();
const CarroController = require('../controllers/CarroController');
const auth = require("../middlewares/usuarioAuth");

routes.get("/carros", auth, CarroController.relatorio);
routes.get("/carro/:id", auth, CarroController.detalhar);
routes.post("/carros", CarroController.cadastrar);
routes.get("/carros/cadastrar", auth, CarroController.cadastrarRender);
routes.get("/carro/cadastrar/:id", auth, CarroController.atualizar);
routes.get("/carro/deletar/:id", auth, CarroController.deletar);

module.exports = routes;
