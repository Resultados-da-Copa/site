const { Router } = require('express')
const usersController = require('../controllers/usersController')

const perfilRouter = Router()

perfilRouter.get('/perfil', usersController.perfil)

module.exports = perfilRouter