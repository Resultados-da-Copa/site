const { Router } = require('express')
const perfilController = require('../controllers/perfilController')

const perfilRouter = Router()

perfilRouter.get('/perfil', perfilController.perfil)

module.exports = perfilRouter