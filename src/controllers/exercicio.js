const ServiceExercicios = require("../services/exercicio");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const service = new ServiceExercicios();

class ControllerExercicios {

  async Login(req, res) {
    const { email, senha } = req.body;
    if(!email || !senha) {
      res.status(401).json({ message: "Email ou senha inválidos" })
    }
    
    const { dataValues: pessoa } = await servico.PegarUmporEmail(email)

    if(!pessoa) {
      res.status(401).json({ message: "Email ou senha inválidos" })
    }
    if(!(await bcrypt.compare(senha, pessoa.senha))) {
      res.status(401).json({ message: "Email ou senha inválidos" })
    }

    const token = jwt.sing(
      { id: pessoa.id, email: pessoa.email, nome: pessoa.nome },
      config.secret
    )

    res.json({
      token: ""
    })
  }


  async GetNome(req, res) {
    try {
      const resultado = await service.GetNome(req.params.id);
      res.status(200).json({
        nomes: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao pegar nome" });
    }
  }

  async GetNomes(_, res) {
    try {
      const resultado = await service.GetNomes();
      res.status(200).json({
        pessoas: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao pegar nomes" });
    }
  }

  async Add(req, res) {
    try {
      service.Add(req.body.pessoa);

      res.status(201).json({ message: "Adicionado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async Update(req, res) {
    try {
      service.Update(
        req.params.id,
        req.body.nome,
        req.body.email,
        req.body.senha
      );

      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar nome" });
    }
  }

  async Delete(req, res) {
    try {
      service.Delete(req.params.id);
      res.status(200).json({
        message: "Deletado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mwssage: "Erro ao deletar nome" });
    }
  }
}
module.exports = ControllerExercicios;
