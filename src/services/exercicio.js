const RepostiorieExercicios = require("../repositories/exercicio.js");
const repositorie = new RepostiorieExercicios();

class ServiceExercicios {
   async GetNome(id) {
    return repositorie.GetNome(id);
  }

  Add(nome) {
    if (!nome) {
      throw new Error("Parâmetro inválido");
    }

    repositorie.Add(nome);
  }

  GetNomes() {
    return repositorie.GetNomes();
  }

  Update(nome, id) {
    if (!nome || isNaN(id)) {
      throw new Error("Parâmetro inválido");
    }

    repositorie.Update(nome, id);
  }

  Delete(id) {
    if (isNaN(id)) {
      throw new Error("Parâmetro inválido");
    }

    repositorie.Delete(id);
  }
}

module.exports = ServiceExercicios;
