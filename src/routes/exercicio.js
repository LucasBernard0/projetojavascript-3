const express = require('express')
const ControllerExercicios = require('../controllers/exercicio')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerExercicios()
const router = express.Router()

router.get('/api/pessoa/:id', authMiddleware, controller.GetNome)
router.post('/api/login', authMiddleware, controller.Login)
// router.post('/api/nomes', authMiddleware, controller.GetNomes)
router.post('/api/nome', authMiddleware, controller.Add)
router.put('/api/pessoa/:id', authMiddleware, controller.Update)
router.delete('/api/pessoa/:id', authMiddleware, controller.Delete)

module.exports = router