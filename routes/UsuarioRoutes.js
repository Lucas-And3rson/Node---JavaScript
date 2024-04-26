const express = require('express');
const routes = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const auth = require("../middlewares/usuarioAuth");
const nivel3 = require("../middlewares/usuarioSuperAdmin");

routes.get("/usuarios", auth, nivel3, UsuarioController.relatorio);
routes.get("/usuario/:id", auth, nivel3, UsuarioController.detalhar);
routes.post("/usuarios", UsuarioController.cadastrar);
routes.get("/usuarios/login", UsuarioController.loginRender);
routes.post("/usuarios/login", UsuarioController.checkLogin);
routes.get("/usuarios/cadastrar", auth, nivel3, UsuarioController.cadastrarRender);
routes.get("/usuario/cadastrar/:id", auth, nivel3, UsuarioController.atualizar);
routes.get("/usuario/deletar/:id", auth, nivel3, UsuarioController.deletar);

module.exports = routes;
