const nomes = new Array("Alpha", "Beta", "Charlie");
const Pessoa = require("../models/exercicio.js")

class RepostiorieExercicios {
   async GetNome(id) {
    return Pessoa.findOne({
      where: { id }
    });
  }

  Add(nome) {
    console.log(`NOME: ${nome}`);
    nomes.push(nome);
  }

  GetNomes() {
    return nomes;
  }

  Update(nome, id) {
    nomes[id] = nome;
  }

  Delete(id) {
    nomes.splice(id, 1);
  }
}

module.exports = RepostiorieExercicios;
