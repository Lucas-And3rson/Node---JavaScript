const express = require('express');
const routes = express.Router();
const ClienteController = require('../controllers/ClienteController');

routes.post("/clientes", ClienteController.cadastrar);
routes.get("/clientes/cadastrar", ClienteController.cadastrarRender);
routes.get("/clientes/", ClienteController.relatorio);
routes.get("/cliente/:id", ClienteController.detalhar);

module.exports = routes;
