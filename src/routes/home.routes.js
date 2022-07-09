const { Router } = require('express')
const usersController = require('../controllers/usersController')

const homeRouter = Router()

homeRouter.get('/', usersController.home)

module.exports = homeRouter





