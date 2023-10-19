const RepostiorieExercicios = require("../repositories/exercicio");
const repositorie = new RepostiorieExercicios();

class ServiceExercicios {
  async GetNome(id) {
    return repositorie.GetNome(id);
  }

  async GetEmail

  async GetNomes() {
    return repositorie.GetNomes();
  }

  async Add(pessoa) {
    if (isNaN(id) || nome == "" || email == "" || senha == "") {
      throw new Error("Preencha todos os campos");
    }
    return repositorie.Add(pessoa);
  }

  Update(id, nome, email, senha) {
    if (nome == "" || email == "" || senha == "") {
      throw new Error("Preencha todos os campos");
    } else if (id < 0 || isNaN(id)) {
      throw new Error("Preencher o campo id corretamente");
    }
    repositorie.Update(id, nome, email, senha);
  }

  Delete(id) {
    return repositorie.Delete(id);
  }
}

module.exports = ServiceExercicios;
