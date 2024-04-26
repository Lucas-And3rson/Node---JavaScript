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

const ClienteRoutes = require('./routes/ClienteRoutes');
app.use(ClienteRoutes);

const UsuarioRoutes = require('./routes/UsuarioRoutes');
app.use(UsuarioRoutes);
//Minha senha do Mongo: TV8wt2OrhQ4KhfIX
//Minha URL: mongodb+srv://lucas:TV8wt2OrhQ4KhfIX@cluster0.kkoixjy.mongodb.net/?retryWrites=true&w=majority

    app.get("/hub", (req, res)=> {
        if(req.session.usuario!=undefined){
            res.render("hub/admin");
        }else{
            res.redirect("/usuarios/login");
        }
    });
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/eventos", (req, res) => {
        res.render("eventos");
    });
    app.get("/sobre", (req, res) => {
        res.render("sobre");
    });

    app.get("/logout", function(req, res){
        req.session.usuario = null;
        res.redirect("/usuarios/login")
    });
    //caso não encontre a página
    app.use(function(res, res) {
        res.status(404).render("/erro/404");
    });

app.listen(process.env.PORT, function(){
    console.log("Run");
});