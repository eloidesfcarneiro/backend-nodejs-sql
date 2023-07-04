const express = require('express')
const router = express.Router()

const cursosController = require('../controllers/cursosController')

router.get('/', cursosController.getCurso)
router.post('/',cursosController.addCurso)

module.exports= router