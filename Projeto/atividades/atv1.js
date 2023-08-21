const express = require('express');
const app = express();
const Cliente = require("./Cliente");
app.set("view engine", "ejs");

      //se fosse com html:
//    const id = document.getElementById("id").value;
//    const nome = document.getElementById("nome").value;
//    const idade = document.getElementById("idade").value;
  const cliente1 = new Cliente(1, "Lucas", 12);
  const cliente2 = new Cliente(2, "Sacul", 13);
  const cliente3 = new Cliente(3, "And", 14);
  const clientes = [cliente1,cliente2,cliente3];
  lista.push(cliente)
  console.log(lista)

app.get("/", function(req, res){
    res.send("Página inicial 1"); 
});

// listando todos os clientes
app.get("/Clientes/", function(req, res){
    let html = "";
    //forof
    for (const c of clientes) {
        html += `
        Cliente ${c.id}<br>
        Nome: ${c.nome}<br>
        Idade: ${c.idade}
        `;
    }
    res.send(html)
    });

    //exibindo dados de cliente específico
    app.get("/Clientes/:id", function(req, res){
        let html = "";
        for (const c of clientes) {
            const idCliente = req.params.id;
            if (c.id==idCliente){
               html += `
            Cliente ${c.id}<br>
            Nome: ${c.nome}<br>
            Idade: ${c.idade}<br>
            `; 
            }
            
        }
        res.send(html);
        });

app.get("/Clientes/:id?", function(req, res){
    const idCliente = req.params.id;
    //buscasse em um BD
    // res.send(`Seus dados são-> Código ${idCliente}`);
    if (idCliente != undefined)
    res.send(`O ID passado foi ${idCliente}`);
    else
    res.send(`Listagem de Clientes`);
});

// pegar banco com query
// localhost:2005/dados?
app.get("/dados", function(req, res){
    const nome = req.query.nome;
    const idade = req.query.idade;
    res.send(`Seu nome é ${nome} e sua idade é ${idade}`);
    });

//Porta do servidor
app.listen("2005", function(){
    console.log("Run");
});