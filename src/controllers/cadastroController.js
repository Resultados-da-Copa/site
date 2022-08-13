const path = require('path')
const fs = require('fs')
const usersDB = fs.readFileSync(path.join(__dirname, '..', 'database', 'users-db.json'), 'utf-8')
const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')

let users = JSON.parse(usersDB)

const cadastroController = {
    renderpage: (req, res) => {
        if (!req.session.isAuthorized) {
            res.render('cadastro')
        }

        res.redirect('/perfil')
    },

    cadastro: (req, res) => {

        if (users.find(user => user.email === req.body.email)) {
            return res.redirect('/login')
        } else {
            const passwordHash = bcrypt.hashSync(req.body.senha)

            const newUser = {
                id: uuid(),
                ...req.body,
                senha: passwordHash
            }

            users.push(newUser)
            users = JSON.stringify(users)
            fs.writeFileSync(path.join(__dirname, '..', 'database', 'users-db.json'), users)

            return res.redirect('/')
        }
    }
}

module.exports = cadastroController
