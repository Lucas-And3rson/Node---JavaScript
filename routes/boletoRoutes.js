const express = require('express');
const routes = express.Router();
const BoletoController = require('../controllers/BoletoController');
const auth = require("../middlewares/usuarioAuth");

routes.get("/boletos", auth, BoletoController.relatorio);
routes.get("/boleto/:id", auth, BoletoController.detalhar);
routes.post("/boletos", BoletoController.cadastrar);
routes.get("/boletos/cadastrar", auth, BoletoController.cadastrarRender);
routes.get("/boleto/cadastrar/:id", auth, BoletoController.atualizar);
routes.get("/boleto/deletar/:id", auth, BoletoController.deletar);

module.exports = routes;