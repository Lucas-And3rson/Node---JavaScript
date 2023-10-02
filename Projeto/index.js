const express = require('express');
const app = express();


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lucas:TV8wt2OrhQ4KhfIX@cluster0.kkoixjy.mongodb.net/?retryWrites=true&w=majority");
const ClienteModel = require("./models/ClienteModel")

// Sem Internet

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const ClienteRoutes = require('./routes/ClienteRoutes');
app.use(ClienteRoutes);
//Minha senha do Mongo: TV8wt2OrhQ4KhfIX
//Minha URL: mongodb+srv://lucas:TV8wt2OrhQ4KhfIX@cluster0.kkoixjy.mongodb.net/?retryWrites=true&w=majority

    app.get("/", function(req, res){
        res.render("index"); 
    });

    app.use(function(res, res) {
        res.status(404).render("erro/404");
    });

   //com internet
//     app.get("/cliente/:id?", async function(req, res){
//         const id = req.params.id;
//         const clientes = await ClienteModel.find();
//         if (id != undefined){
//             let encontrou = false;
//             for (const c of clientes) {
//             if(id == c.id){
//                 encontrou = true;
//                 res.render("cliente/detalhar", {c});
//                 break;
//             }
//         }
//         }else{
//             res.render("cliente/relatorio");
//         }
//    });

   //estudando POST

// Com Internet
//    app.post("/clientes", async function(req, res){
//        const novoCliente = new ClienteModel ({
//            id: req.body.id,
//            nome: req.body.nome,
//            idade: req.body.idade
//         })
//         await novoCliente.save();
//        res.redirect("/clientes");
//    });

//Porta do servidor

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function() {
//     window.print();
// });

app.listen("2005", function(){
    console.log("Run");
});