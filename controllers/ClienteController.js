const ClienteModel = require("../models/ClienteModel");
// const Cliente = require("../Cliente");
// const { findOneAndUpdate } = require("../models/ClienteModel");
// const VClientes = [];


class ClienteController{
    static async cadastrar(req, res){
        if(req.body._id == ''){ //cadastrar
            const cliente = await ClienteModel.findOne({ cpf: req.body.cpf });
            if(cliente != null){
                //cpf existe
                res.redirect(`clientes/cadastrar?s=4&nome=${req.body.nome}&cpf=${req.body.cpf}`);
            }else{
                const novoCliente = new ClienteModel ({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    tipo: req.body.tipo,
                    mes: req.body.mes
                })
                await novoCliente.save();
                res.redirect("/clientes?s=1");
            }
        }else{ //atualizar
            const cliente = await ClienteModel.findOne({ cpf: req.body.cpf });
            const clienteAtual = await ClienteModel.findOne({ _id: req.body._id });
            if(cliente == null || clienteAtual.cpf == req.body.cpf){
                const id = req.body._id;
                const ClienteUpdate = {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    tipo: req.body.tipo,
                    mes: req.body.mes
                }
                await ClienteModel.findOneAndUpdate({_id:id}, ClienteUpdate);
                res.redirect("/clientes?s=3");
            }else{
                //cpf existe
                res.redirect(`clientes/cadastrar?s=4&nome=${req.body.nome}&cpf=${req.body.cpf}`);
            }
        }
        }
    static async relatorio(req, res){
        const status = req.query.s;
        const VClientes = await ClienteModel.find();
        res.render("cliente/relatorio", {VClientes, status});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const c = await ClienteModel.findOne({_id:id});
        res.render("cliente/detalhar", {c});
}
    static async imprimir(req, res){
        const id = req.params.id;
        const c = await ClienteModel.findOne({_id:id});
        res.render("cliente/boleto", {c});
    }
    static cadastrarRender(req, res){
        const status = req.query.s;
        // let cpfExiste = {
        //     nome: req.query.nome,
        //     cpf: req.query.cpf
        // }
        let clienteUpdate = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            tipo: req.body.tipo,
            mes: req.body.mes
        }
        res.render("cliente/cadastrar", {clienteUpdate, status});
}
    static async deletar(req, res){
            const id = req.params.id;
            await ClienteModel.findOneAndDelete({_id:id});
            res.redirect("/clientes?s=2");
        }
    static async atualizar(req, res){
            const status = req.query.s;
            const id = req.params.id;
            const clienteUpdate = await ClienteModel.findOne({_id:id});
            res.render("cliente/cadastrar", {clienteUpdate, status});
        }
}

module.exports = ClienteController;