const ClienteModel = require("../models/ClienteModel");
// const Cliente = require("../Cliente");
// const { findOneAndUpdate } = require("../models/ClienteModel");
// const VClientes = [];


class ClienteController{
    static async cadastrar(req, res){
        // const NovoCliente = req.body;
        // console.log(NovoCliente)
        // VClientes.push(new Cliente(NovoCliente.id, NovoCliente.nome, NovoCliente.idade));
        // res.redirect("./clientes?s=1");
        if(req.body._id == ''){ //cadastrar
            const novoCliente = new ClienteModel ({
                id: req.body.id,
                nome: req.body.nome,
                idade: req.body.idade
            })
            await novoCliente.save();
            res.redirect("/clientes?s=1");
        }else{ //atualizar
            const id = req.body.id;
            const clienteUpdate = {
                nome: req.body.nome,
                idade: req.body.idade
            }
            await ClienteModel.findOneAndUpdate({id:id}, clienteUpdate);
            res.redirect("/clientes?s=3");
        }
        }
    static async relatorio(req, res){
        const status = req.query.s;
        const VClientes = await ClienteModel.find();
        res.render("cliente/relatorio", {VClientes, status});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const c = await ClienteModel.findOne({id:id});
        res.render("cliente/detalhar", {c});
}
    static cadastrarRender(req, res){
        let clienteUpdate = {}
        res.render("cliente/cadastrar", {clienteUpdate});
}
    static async deletar(req, res){
            const id = req.params.id;
            await ClienteModel.findOneAndDelete({id:id});
            res.redirect("/clientes?s=2");
        }
    static async atualizar(req, res){
            const id = req.params.id;
            const clienteUpdate = await ClienteModel.findOne({id:id});
            res.render("cliente/cadastrar", {clienteUpdate});
        }
}

module.exports = ClienteController;