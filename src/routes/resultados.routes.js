const { Router } = require('express')
const usersController = require('../controllers/usersController')

const resultadosRouter = Router()

resultadosRouter.get('/resultados', usersController.resultados)

module.exports = resultadosRouter
