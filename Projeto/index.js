const express = require('express');
const { clearCookie } = require('express/lib/response');
const app = express();
const Cliente = require("./Cliente");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

  const cliente1 = new Cliente(1, "Lucas", 5);
  const cliente2 = new Cliente(2, "Ucas", 4);
  const cliente3 = new Cliente(3, "Cas", 3);
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
    });
   
    app.get("/cliente/:id?", function(req, res){
        const id = req.params.id;
        if (id != undefined){
            let encontrou = false;
            for (const c of Vclientes) {
            if(id == c.id){
                encontrou = true;
                res.render("cliente", {c});
                break;
            }

        }
        }else{
            res.render("clientes", {Vclientes});
        }
        
   });
    app.get("/clientes/cadastrar", function(req, res){
            res.render("cadastrar");
    });
   //estudando POST

   app.post("/clientes", function(req, res){
       const dados = req.body;
       const ClienteNovo = new Cliente(dados.id, dados.nome, dados.idade);
       Vclientes.push(ClienteNovo);
       res.redirect("/clientes");
   });

//Porta do servidor
app.listen("2005", function(){
    console.log("Run");
});