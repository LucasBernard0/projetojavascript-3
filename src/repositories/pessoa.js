const Pessoa = require("../models/pessoa.js")
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

  async Add(pessoa, isAdmin = false) {
    const senha = await bcrypt.hash(pessoa.senha, 10)

    return Pessoa.create({ ...pessoa, senha, permissao: isAdmin ? 0 : 1 })
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
