const { Router } = require('express')
const homeController = require('../controllers/homeController')

const homeRouter = Router()

homeRouter.get('/', homeController.home)
homeRouter.get('/partida', homeController.partida)

module.exports = homeRouter





