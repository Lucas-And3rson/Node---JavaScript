const express = require('express');
const routes = express.Router();
const ClienteController = require('../controllers/ClienteController');
const auth = require("../middlewares/usuarioAuth");
const nivel3 = require("../middlewares/usuarioSuperAdmin");
const nivel2 = require("../middlewares/usuarioAdmin");

routes.get("/clientes", auth, nivel3, ClienteController.relatorio);
routes.get("/cliente/:id", auth, ClienteController.detalhar);
routes.post("/clientes", nivel2, ClienteController.cadastrar);
routes.get("/cliente/boleto/:id", auth, ClienteController.imprimir);
routes.get("/clientes/cadastrar", auth, ClienteController.cadastrarRender);
routes.get("/cliente/cadastrar/:id", auth, ClienteController.atualizar);
routes.get("/cliente/deletar/:id", auth, ClienteController.deletar);
module.exports = routes;
