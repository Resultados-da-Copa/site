const { Router } = require('express')
const resultadosController = require('../controllers/resultadosController')

const resultadosRouter = Router()

resultadosRouter.get('/resultados', resultadosController.resultados)

module.exports = resultadosRouter
