const { Router } = require('express')
const perfilController = require('../controllers/perfilController')

const perfilRouter = Router()

perfilRouter.get('/perfil', perfilController.perfil)
perfilRouter.post('/perfil', perfilController.updateProfile)

module.exports = perfilRouter