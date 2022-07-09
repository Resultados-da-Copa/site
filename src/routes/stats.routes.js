const { Router } = require('express')
const usersController = require('../controllers/usersController')

const statsRouter = Router()

statsRouter.get('/stats', usersController.stats)

module.exports = statsRouter




