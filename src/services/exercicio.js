const RepositoryExercicio = require('../repositories/exercicio');

const repositorio = new RepositoryExercicio()

class ServiceExercicio {

    PegarUm(index) {
        return repositorio.PegarUm(index)
    }

    PegarTodos() {
        return repositorio.PegarTodos()
    }

    Adicionar(nome) {
        if (!nome) {
            throw new Error("FAvor preencher o nome.")
        }
        repositorio.Adicionar(nome)
    }

    Alterar(index, nome) {
        if (!nome) {
            throw new Error ("Favor preencher o nome.")
        } else if (!index || isNaN(index)) {
            throw new Error ("Favor corretamente o index.")
        }

        repositorio.Adicionar(nome)
    }    
}