const express = require('express');
const routes = express.Router();
const ClienteController = require('../controllers/ClienteController');
const auth = require("../middlewares/usuarioAuth");

routes.get("/clientes", auth, ClienteController.relatorio);
routes.get("/cliente/:id", auth, ClienteController.detalhar);
routes.post("/clientes", ClienteController.cadastrar);
routes.get("/clientes/cadastrar", auth, ClienteController.cadastrarRender);
routes.get("/cliente/cadastrar/:id", auth, ClienteController.atualizar);
routes.get("/cliente/deletar/:id", auth, ClienteController.deletar);

module.exports = routes;
