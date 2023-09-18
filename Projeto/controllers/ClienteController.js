const ClienteModel = require("../models/ClienteModel");
const Cliente = require("../Cliente");
const VClientes = [];


class ClienteController{
    static async cadastrar(req, res){
    // const NovoCliente = req.body;
    // console.log(NovoCliente)
    // VClientes.push(new Cliente(NovoCliente.id, NovoCliente.nome, NovoCliente.idade));
    // res.redirect("./clientes?s=1");
    const novoCliente = new ClienteModel ({
         id: req.body.id,
         nome: req.body.nome,
         idade: req.body.idade
      })
      await novoCliente.save();
     res.redirect("/clientes");
    }

    static cadastrarRender(req, res){
        res.ren("cliente/cadastrar");
    }
    static async relatorio(req, res){
        const salvo = req.query.s;
        const VClientes = await ClienteModal.find();
        res.render("cliente/relatorio", {VClientes, salvo});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const cliente = await ClienteModel.findOne({id:id});
        res.render("cliente/detalhar", {c});
    }
}

module.exports = ClienteController;