const nomes = Array("Alice", "Bob", "Charlie");

class RepositoryExercicio {

    PegarUm(index) {
        return nomes[index]
    }

    PegarTodos() {
        return nomes 
    }

    Adicionar(nome) {
        nomes.push(nomes)
    }
    
    Alterar(index, nome) {
        nomes[index] = nome
    }

    Deletar(index) {
        nomes.splice(index, 1)
    }
}