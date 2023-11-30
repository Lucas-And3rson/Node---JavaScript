const CarroModel = require("../models/CarroModel");

class CarroController{
    static async cadastrar(req, res){
        if(req.body._id == ''){ //cadastrar
                const novoCarro = new CarroModel ({
                    nome: req.body.nome,
                    marca: req.body.marca,
                    ano: req.body.ano,
                    valor: req.body.valor
                })
                await novoCarro.save();
                res.redirect("/carros?s=1");
        }else{ //atualizar
                const id = req.body._id;
                const carroUpdate = {
                    nome: req.body.nome,
                    marca: req.body.marca,
                    ano: req.body.ano,
                    valor: req.body.valor
                }
                await CarroModel.findOneAndUpdate({_id:id}, carroUpdate);
                res.redirect("/carros?s=3");
        }
        }
    static async relatorio(req, res){
        const status = req.query.s;
        const VCarros = await CarroModel.find();
        res.render("carro/relatorio", {VCarros, status});
}
    static async detalhar(req, res){
        const id = req.params.id;
        const c = await CarroModel.findOne({_id:id});
        res.render("carro/detalhar", {c});
}
    static cadastrarRender(req, res){
        const status = req.query.s;
        let carroUpdate = {
            nome: req.body.nome,
            marca: req.body.marca,
            ano: req.body.ano,
            valor: req.body.valor
        };
        if(req.session.carro==null){
            res.render("carro/cadastrar", {carroUpdate, status});
        }else{
            res.render("/");
        }
    }

    static async deletar(req, res){
        const id = req.params.id;
        await CarroModel.findOneAndDelete({_id:id});
        res.redirect("/carros?s=2");
    }
    static async atualizar(req, res){
        const status = req.query.s;
        const id = req.params.id;
        const carroUpdate = await CarroModel.findOne({_id:id});
        res.render("carro/cadastrar", {carroUpdate, status});
    }
}

module.exports = CarroController;