const express = require('express');
const app = express();

const mongoose = require("mongoose");
const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
    }));
    require("dotenv/config");
mongoose.connect(process.env.MONGO_URI);
// const ClienteModel = require("./models/ClienteModel")
// const UsuarioModel = require("./models/UsuarioModel")

// Sem Internet

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const CarroRoutes = require('./routes/CarroRoutes');
app.use(CarroRoutes);
const ClienteRoutes = require('./routes/ClienteRoutes');
app.use(ClienteRoutes);
const UsuarioRoutes = require('./routes/UsuarioRoutes');
app.use(UsuarioRoutes);
//Minha senha do Mongo: TV8wt2OrhQ4KhfIX
//Minha URL: mongodb+srv://lucas:TV8wt2OrhQ4KhfIX@cluster0.kkoixjy.mongodb.net/?retryWrites=true&w=majority

    app.get("/", function(req, res){
        if(req.session.usuario!=undefined){
            res.render("index");
        }else{
            res.redirect("/usuarios/login");
        }
    });
    app.get("/logout", function(req, res){
        req.session.usuario = null;
        res.redirect("/usuarios/login")
    });
    //caso não encontre a página
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

app.listen(process.env.PORT, function(){
    console.log("Run");
});
