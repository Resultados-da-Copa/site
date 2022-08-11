const { Router } = require('express')
const loginController = require('../controllers/loginController')

const loginRouter = Router()

loginRouter.get('/login', loginController.renderpage)
loginRouter.post('/login', loginController.login)

module.exports = loginRouter

