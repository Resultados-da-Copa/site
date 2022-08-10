const path = require('path')
const fs = require('fs')
const usersDB = fs.readFileSync(path.join(__dirname, '..', 'database', 'users-db.json'), 'utf-8')
const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')

let users = JSON.parse(usersDB)

const perfilController = {
    perfil: (req, res)=>{
        if(!req.session.isAuthorized){
            return res.redirect('/login')
        }
        res.render('perfil')
    },

    updateProfile: (req, res)=>{
        const {name, username, email, password, team, date} = req.body

        const userFound = users.find(user => user.id === req.session.idUser)

        const passwordHash = bcrypt.hashSync(password)

        
        if(name !== ''){userFound.nome = name}
        if(username !== ''){userFound.usuario = username}
        if(email !== ''){userFound.email = email}
        if(password !== ''){userFound.senha = passwordHash}
        if(team !== ''){userFound.selecao = team}
        if(date !== ''){userFound.nascimento = date}

        users = JSON.stringify(users)
        fs.writeFileSync(path.join(__dirname, '..', 'database', 'users-db.json'), users)

        return res.redirect('/')

    }, 
    salvarImagem:(req,res)=>{
        
    }

}

module.exports = perfilController