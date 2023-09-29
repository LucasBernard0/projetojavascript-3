const express = require('express')
const ControllerExercicios = require('../controllers/exercicio.js')

const controller = new ControllerExercicios()
const router = express.Router()

router.get('/api/nome/:id', controller.GetNome)
router.post('/api/nome', controller.Add)
router.post('/api/nomes', controller.GetNomes)
router.put('/api/nome/:id', controller.Update)
router.delete('/api/nome/:id', controller.Delete)

module.exports = router