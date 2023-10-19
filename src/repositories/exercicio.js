const Pessoa = require("../models/exercicio.js")
const bcrypt = require("bcrypt");


class RepostiorieExercicios {
   
  async GetNome(id) {
    return Pessoa.findOne({
      where: { id }
    });
  }

  async PegarUmPorEmail(email) {
    return Pessoa.findOne({
      where: { email }
  })
}
  
  GetNomes() {
    return Pessoa.findAll();
  }

  async Add(pessoa, transaction) {
    const hashSenha = bcrypt.hash(pessoa.senha, 10)

    const result = await Pessoa.create(
      { ...pessoa, senha: hashSenha },
      { transaction }
    )
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
