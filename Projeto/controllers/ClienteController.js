const ClienteModel = require("../models/ClienteModel");
const Cliente = require("../Cliente");
const VClientes = [];


class ClienteController{
    static async relatorio(req, res){
        const salvo = req.query.s;
        const VClientes = await ClienteModel.find();
        res.render("cliente/relatorio", {VClientes, salvo});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const cliente = await ClienteModel.findOne({id:id});
        res.render("cliente/detalhar", {c});
}
    static cadastrarRender(req, res){
        res.render("cliente/cadastrar");
}
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
}

module.exports = ClienteController;