const express = require('express');
const routes = express.Router();
const CarroController = require('../controllers/CarroController');

routes.get("/carros", CarroController.relatorio);
routes.get("/carro/:id",CarroController.detalhar);
routes.post("/carros", CarroController.cadastrar);
routes.get("/carros/cadastrar", CarroController.cadastrarRender);
routes.get("/carro/cadastrar/:id", CarroController.atualizar);
routes.get("/carro/deletar/:id", CarroController.deletar);

module.exports = routes;
