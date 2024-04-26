const UsuarioModel = require("../models/UsuarioModel");
// const Usuario = require("../Usuario");
// const { findOneAndUpdate } = require("../models/UsuarioModel");
// const VUsuarios = [];
const bcryptjs = require("bcryptjs");

class UsuarioController{
    static async cadastrar(req, res){
        if(req.body._id == ''){ //cadastrar
            const user = await UsuarioModel.findOne({ email: req.body.email });
            if(user != null){
                //email existe
                res.redirect(`usuarios/cadastrar?s=4&nome=${req.body.nome}&email=${req.body.email}`);
            }else{
                const salt = bcryptjs.genSaltSync();
                const hash = bcryptjs.hashSync(req.body.senha, salt);
                const novoUsuario = new UsuarioModel ({
                    nome: req.body.nome,
                    email: req.body.email,
                    nivel: req.body.nivel,
                    senha: hash
                })
                await novoUsuario.save();
                res.redirect("/usuarios?s=1");
            }
        }else{ //atualizar
            const user = await UsuarioModel.findOne({ email: req.body.email });
            const userAtual = await UsuarioModel.findOne({ _id: req.body._id });
            const salt = bcryptjs.genSaltSync();
            const hash = bcryptjs.hashSync(req.body.senha, salt);
            if(user == null || userAtual.email == req.body.email){
                const id = req.body._id;
                const usuarioUpdate = {
                    nome: req.body.nome,
                    email: req.body.email,
                    nivel: req.body.nivel,
                    senha: hash
                }
                await UsuarioModel.findOneAndUpdate({_id:id}, usuarioUpdate);
                res.redirect("/usuarios?s=3");
            }else{
                //email existe
                res.redirect(`usuarios/cadastrar?s=4&nome=${req.body.nome}&email=${req.body.email}`);
            }
        }
        }
    static async relatorio(req, res){
        const status = req.query.s;
        const VUsuarios = await UsuarioModel.find();
        res.render("usuario/relatorio", {VUsuarios, status});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const u = await UsuarioModel.findOne({_id:id});
        res.render("usuario/detalhar", {u});
}
    static cadastrarRender(req, res){
        const status = req.query.s;
        let usuarioUpdate = {
            nome: req.query.nome,
            email: req.query.email,
            nivel: req.body.nivel
        };
        res.render("usuario/cadastrar", {usuarioUpdate, status});
    }
    static async checkLogin(req, res){
        const user = await UsuarioModel.findOne({ email: req.body.email });
        if(user != null){
            if(bcryptjs.compareSync(req.body.senha, user.senha)){ //email e senha válidos
                req.session.usuario = user.email;
                res.redirect("/hub");
            }else{ //senha inválida
                res.redirect(`/usuarios/login?s=6&email=${req.body.email}`)
            }
        }else{ //email inválido
            res.redirect(`/usuarios/login?s=5&email=${req.body.email}`);
        }
    }
    static loginRender(req, res){
        const status = req.query.s;
        let usuarioLogado = {
            email: req.query.email
        };
        res.render("usuario/login", {usuarioLogado, status});
    }
    static async deletar(req, res){
        const id = req.params.id;
        await UsuarioModel.findOneAndDelete({_id:id});
        res.redirect("/usuarios?s=2");
    }
    static async atualizar(req, res){
        const status = req.query.s;
        const id = req.params.id;
        const usuarioUpdate = await UsuarioModel.findOne({_id:id});
        res.render("usuario/cadastrar", {usuarioUpdate, status});
    }
}

module.exports = UsuarioController;