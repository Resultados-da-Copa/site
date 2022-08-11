const { Router } = require('express')
const perfilRouter = Router()
const multer = require('multer')

const perfilController = require('../controllers/perfilController')
const multerDiskStorage = require('../controllers/uploadImageController')

let upload = multer({storage: multerDiskStorage})

perfilRouter.get('/perfil', perfilController.perfil)
perfilRouter.post('/perfil', upload.single('imageprofile'), perfilController.updateProfile)


//perfilRouter.post('/perfil', perfilController.updateProfile)



module.exports = perfilRouter