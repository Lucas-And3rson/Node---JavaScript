const ClienteModel = require("../models/ClienteModel");

class ClienteController{
    static async relatorio(req, res){
        const id = req.params.id;
        const salvo = req.query.s;
        const clientes = await ClienteModel.find();
        if(id == undefined){
            res.render("cliente/relatorio", {clientes, salvo});
        }
}
    static async detalhar(req, res){
        const id = req.params.id;
        let encontrou = false;
        const cliente = await ClienteModel.find();
        for(const c of cliente){
            if(id == c.id){
                encontrou = true;
                res.render("Cliente/detalhar", {c});
                break
            }
        }
        if(encontrou == false){
            res.send("Cliente não encontrado");
        }
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