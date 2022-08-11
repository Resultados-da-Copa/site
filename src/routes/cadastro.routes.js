const { Router } = require('express')
const cadastroController = require('../controllers/cadastroController')

const cadastroRouter = Router()

cadastroRouter.get('/cadastro', cadastroController.renderpage)
cadastroRouter.post('/cadastro', cadastroController.cadastro)

module.exports = cadastroRouter