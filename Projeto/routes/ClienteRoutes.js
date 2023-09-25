const express = require('express');
const routes = express.Router();
const ClienteController = require('../controllers/ClienteController');

routes.get("/clientes/", ClienteController.relatorio);
routes.get("/cliente/:id", ClienteController.detalhar);
routes.get("/clientes/cadastrar", ClienteController.cadastrarRender);
routes.post("/clientes", ClienteController.cadastrar);

module.exports = routes;
