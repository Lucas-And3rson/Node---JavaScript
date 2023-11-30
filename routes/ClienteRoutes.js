const express = require('express');
const routes = express.Router();
const ClienteController = require('../controllers/ClienteController');

routes.get("/clientes", ClienteController.relatorio);
routes.get("/cliente/:id", ClienteController.detalhar);
routes.post("/clientes", ClienteController.cadastrar);
routes.get("/clientes/cadastrar", ClienteController.cadastrarRender);
routes.get("/cliente/cadastrar/:id", ClienteController.atualizar);
routes.get("/cliente/deletar/:id", ClienteController.deletar);

module.exports = routes;
