const { Router } = require('express')
const partidaController = require('../controllers/partidaController')

const partidaRouter = Router()

partidaRouter.get('/partida/:id', partidaController.partida)

module.exports = partidaRouter