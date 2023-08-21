const express = require('express');
const app = express();
const Cliente = require("./Cliente");
app.set("view engine", "ejs");

  const cliente1 = new Cliente(1, "Lucas", 12);
  const cliente2 = new Cliente(2, "Sacul", 13);
  const cliente3 = new Cliente(3, "And", 14);
  const Vclientes = [cliente1,cliente2,cliente3];

    app.get("/", function(req, res){
        const pessoa = {
            nome: "Lucas",
            curso: "Informática"
        }
        res.render("index", {pessoa}); 
    });

    app.get("/clientes", function(req, res){
         res.render("clientes", {Vclientes});
         })

//Porta do servidor
app.listen("2005", function(){
    console.log("Run");
});