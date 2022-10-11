const {Router} = require('express')
const controller = require('../controllers/noticiaController')
const noticiaRouter = Router()

noticiaRouter.get('/noticia/:id', controller.noticia)

module.exports = noticiaRouter