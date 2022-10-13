const {Router} = require('express')
const controller = require('../controllers/logoutController')
const logoutRouter = Router()

logoutRouter.post('/logout', controller.logout)
logoutRouter.get('/logout', controller.logout)

module.exports = logoutRouter