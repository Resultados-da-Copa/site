const { Router } = require('express')
const estatisticasController = require('../controllers/estatisticasController')

const estatisticasRouter = Router()

estatisticasRouter.get('/estatisticas', estatisticasController.estatisticas)

module.exports = estatisticasRouter 




