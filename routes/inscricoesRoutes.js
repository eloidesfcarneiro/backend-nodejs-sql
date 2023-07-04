const express = require('express')
const router = express.Router()

const incricoesController = require('../controllers/inscricoesController')

router.get('/', incricoesController.getInscricoes)
router.post('/', incricoesController.addInscricao)
router.put('/', incricoesController.cancelInscricao)

module.exports = router