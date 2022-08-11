const path = require('path')
const multer = require ('multer')
const { v4: uuid } = require('uuid')



const multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback)=> {
        let folder = path.join(__dirname, '../../public/img/profileImage/')
        callback(null, folder)
    },
    filename: (req,file,callback)=>{
        let imageName = uuid() + Date.now() + path.extname(file.originalname)
        callback(null, imageName)
    }
})

module.exports = multerDiskStorage