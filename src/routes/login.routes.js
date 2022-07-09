const { Router } = require('express')
const usersController = require('../controllers/usersController')

const loginRouter = Router()

loginRouter.get('/login', usersController.login)

module.exports = loginRouter

