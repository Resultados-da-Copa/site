const { Router } = require('express')
const partidaController = require('../controllers/partidaController')

const partidaRouter = Router()

partidaRouter.get('/partida', partidaController.partida)

module.exports = partidaRouter