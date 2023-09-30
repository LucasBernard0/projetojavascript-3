const express = require('express')
const ControllerExercicios = require('../controllers/exercicio')

const controller = new ControllerExercicios()
const router = express.Router()

router.get('/api/pessoa/:id', controller.GetNome)
router.post('/api/nomes', controller.GetNomes)
router.post('/api/nome', controller.Add)
router.put('/api/pessoa/:id', controller.Update)
router.delete('/api/pessoa/:id', controller.Delete)

module.exports = router