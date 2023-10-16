const express = require('express');
const routes = express.Router();
const UsuarioController = require('../controllers/UsuarioController');


routes.get("/usuarios", UsuarioController.relatorio);
routes.get("/usuario/:id", UsuarioController.detalhar);
routes.post("/usuarios", UsuarioController.cadastrar);
routes.get("/usuarios/cadastrar", UsuarioController.cadastrarRender);
routes.get("/usuario/cadastrar/:id", UsuarioController.atualizar);
routes.get("/usuario/deletar/:id", UsuarioController.deletar);

module.exports = routes;
