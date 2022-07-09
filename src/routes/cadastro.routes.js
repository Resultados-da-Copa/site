const { Router } = require('express')
const usersController = require('../controllers/usersController')

const cadastroRouter = Router()

cadastroRouter.get('/cadastro', usersController.cadastro)

module.exports = cadastroRouter