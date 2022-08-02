const { Router } = require('express')
const perfilController = require('../controllers/perfilController')
const path = require('path')
const multer = require ('multer')
const perfilRouter = Router()

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback)=> {
        let folder = path.join(__dirname,'../public/profile-image')
        callback(null,folder)
    },
    filename: (req,file,callback)=>{
        let imageName = Date.now() + path.extname(file.originalname)
        callback(null,imageName)
    }
})

const upload = multer({ storage: multerDiskStorage })


perfilRouter.get('/perfil', perfilController.perfil)
perfilRouter.post('/perfil',upload.single(''),
 perfilController.salvarImagem)
module.exports = perfilRouter