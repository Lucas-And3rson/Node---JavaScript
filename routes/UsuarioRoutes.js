const express = require('express');
const routes = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const auth = require("../middlewares/usuarioAuth");


routes.get("/usuarios", auth, UsuarioController.relatorio);
routes.get("/usuario/:id", auth, UsuarioController.detalhar);
routes.post("/usuarios", UsuarioController.cadastrar);
routes.get("/usuarios/login", UsuarioController.loginRender);
routes.post("/usuarios/login", UsuarioController.checkLogin);
routes.get("/usuarios/cadastrar", UsuarioController.cadastrarRender);
routes.get("/usuario/cadastrar/:id", auth, UsuarioController.atualizar);
routes.get("/usuario/deletar/:id", UsuarioController.deletar);

module.exports = routes;
