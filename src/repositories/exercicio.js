const Pessoa = require("../models/exercicio.js")

class RepostiorieExercicios {
   
  async GetNome(id) {
    return Pessoa.findOne({
      where: { id }
    });
  }
  
  GetNomes() {
    return Pessoa.findAll();
  }

  async Add(pessoa) {
    console.log(pessoa)
    return Pessoa.create(pessoa)
  }
  
  async Update(id, nome, email, senha) {
    return Pessoa.update({
      nome,
      senha,
      email
    },{
      where: { id }
    })
  }

  async Delete(id) {
    return Pessoa.destroy({
      where: { id }
    });
  }
}

module.exports = RepostiorieExercicios;
