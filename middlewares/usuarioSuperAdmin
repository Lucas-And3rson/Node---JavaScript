const UsuarioModel = require("../models/UsuarioModel");

async function nivel(req, res, next){
    try {
        const user = await UsuarioModel.findOne({ email: req.session.usuario });
        if(user && user.nivel === 3){
            next();
        } else {
            res.redirect("/usuarios/cadastrar");
        }
    } catch (error) {
        console.error("Erro ao verificar o nível do usuário:", error);
        res.redirect("/usuarios/login");
    }
}

module.exports = nivel;