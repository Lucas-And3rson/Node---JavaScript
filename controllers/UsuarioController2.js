const ClienteModel = require("../models/ClienteModel");
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
            res.render("cliente/cadastrar");
    }
    static relatorio(req, res){
        res.render("cliente/relatorio", {VClientes});

}
    static detalhar(req, res){
        const id = req.params.id;
        if (id != undefined){
            let encontrou = false;
            for (const c of VClientes) {
                if(id == c.id){
                    encontrou = true;
                    res.render("cliente/detalhar", {c});
                    break;
                }
            }
        }else{
            res.render("../cliente/relatorio");
        }
    }
}

module.exports = ClienteController;