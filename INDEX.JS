const pessoa = {
    nome : "Lucas",
    sobrenome : "Anderson",
    idade : 2,
    cpf : 12345678920,
    endereço :{
        logradouro : "rua",
        numero : 12,
        bairro : "CAMPO",
        cidade : "iguarabira",
        estado : "afogados"
    }
}
    pessoa.telefone = 87999887766;
    pessoa.dataNasc = "06/06/2006";
    pessoa.email = "lucas@gmail.com";
    pessoa.cep = 56840-000;

    pessoa.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
    console.log(pessoa.nomeCompleto())

    pessoa.enderecoCompleto = function(){
        return `${this.endereço.logradouro}, ${this.endereço.numero}, ${this.endereço.bairro} - ${this.endereço.cidade}/${this.endereço.estado}`;
    }
    console.log(pessoa.enderecoCompleto())

    console.log(pessoa)