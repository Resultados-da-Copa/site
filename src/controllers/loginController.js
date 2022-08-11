const path = require('path')
const fs = require('fs')
const usersDB = fs.readFileSync(path.join(__dirname, '..', 'database', 'users-db.json'), 'utf-8')
const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')

let users = JSON.parse(usersDB)

const loginController = {
    renderpage: (req, res) => {
        if (!req.session.isAuthorized) {
            res.render('login')
        }
        res.redirect('/perfil')
    },

    login: (req, res) => {
        const userFound = users.find(user => user.email === req.body.email)

        if (!userFound) {
            return res.status(401).redirect('/login')
        }

        const senhaCorreta = bcrypt.compareSync(req.body.senha, userFound.senha)

        if (!senhaCorreta) {
            return res.status(401).redirect('/login')
        }

        req.session.idUser = userFound.id
        console.log(req.session.idUser)
        req.session.isAuthorized = true
        return res.redirect('/')
    }
}

module.exports = loginController
