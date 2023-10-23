const UsuarioModel = require("../models/UsuarioModel");
// const Usuario = require("../Usuario");
const { findOneAndUpdate } = require("../models/UsuarioModel");
// const VUsuarios = [];


class UsuarioController{
    static async cadastrar(req, res){
        // const NovoUsuario = req.body;
        // console.log(NovoUsuario)
        // Vusuarios.push(new Usuario(NovoUsuario.id, NovoUsuario.nome, NovoUsuario.idade));
        // res.redirect("./usuarios?s=1");
        if(req.body._id == ''){ //cadastrar
            const user = await UsuarioModel.findOne({ email: req.body.email });
            if(user != null){
                //email existe
                res.redirect(`usuarios/cadastrar?s=4&nome=${req.body.nome}&email=${req.body.email}`);
            }else{
                const novoUsuario = new UsuarioModel ({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })
                await novoUsuario.save();
                res.redirect("/usuarios?s=1");
            }
            
        }else{ //atualizar
            const user = await UsuarioModel.findOne({ email: req.body.email });
            console.log(user)
            console.log(req.body.email)
            if(user == null || user.email == req.body.email){
                console.log(1)
                const id = req.body._id;
                const usuarioUpdate = {
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                }
                await UsuarioModel.findOneAndUpdate({_id:id}, usuarioUpdate);
                res.redirect("/usuarios?s=3");
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
        const id = req.params.id;
        const status = req.query.s;
        let usuarioUpdate = {
            nome: req.query.nome,
            email: req.query.email
        };
        res.render("usuario/cadastrar", {usuarioUpdate, status});
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