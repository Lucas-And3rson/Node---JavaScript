const ClienteModel = require("../models/ClienteModel");
const Cliente = require("../Cliente");
const VClientes = [];


class ClienteController{
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
     res.redirect("/clientes?s=1");
    }
    static async deletar(req, res){
            const id = req.params.id;
            await ClienteModel.findOneAndDelete({id:id});
            res.redirect("/clientes?s=2");
        }
}

module.exports = ClienteController;