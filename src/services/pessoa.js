const RepostiorieExercicios = require("../repositories/pessoa");
const repositorie = new RepostiorieExercicios();

class ServiceExercicios {
  async PegarUm(id){
    if(!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.")
    }
    return repositorie.PegarUm(id)
  }

  async PegarUmPorEmail(email) {
    if(!email.trim()) {
      throw new Error("Preencha o email")
    }
    return repositorio.PegarUmPorEmail(email)
  }
  

  async GetNomes() {
    return repositorie.GetNomes();
  }

  async Add(pessoa, isAdmin = false) {
    if(!pessoa) {
      throw new Error("Favor preencher o pessoa.")
    } else if(!pessoa.nome) {
      throw new Error("Favor preencher o nome.")
    } else if(!pessoa.email) {
      throw new Error("Favor preencher o email.")
    } else if(!pessoa.senha) {
      throw new Error("Favor preencher o senha.")
    }

    return repositorie.Add(pessoa, isAdmin)
  }

  Update(id, pessoa) {
    if(!pessoa) {
      throw new Error("Favor preencher o pessoa.")
    } else if(!pessoa.nome) {
      throw new Error("Favor preencher o nome.")
    } else if(!pessoa.email) {
      throw new Error("Favor preencher o email.")
    } else if(!pessoa.senha) {
      throw new Error("Favor preencher o senha.")
    } else if(!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.")
    }

    return repositorie.Add(pessoa)
  }

  Delete(id) {
    if(!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.")
    }

    return repositorie.Deletar(id)
  }
}

module.exports = ServiceExercicios;
