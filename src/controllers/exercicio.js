const ServicoExercicio = require('../services/exercicio')

const servico = new ServicoExercicio()

class ControllerExercicio{

    PegarUm(req, res) {
        try {
            const index = req.params.index

            const result = servico.PegarUm(index)

            res.status(200).json({ no})
        }
    }
}
