const { users } = require('../database')
const { team } = require('../database')
const bcrypt = require('bcryptjs')


const cadastroController = {
    renderpage: (req, res) => {
        if (!req.session.isAuthorized) {
            res.status(200).render('cadastro')
        }

        res.status(200).redirect('/perfil')
    },

    cadastro: async (req, res) => {
        const {nome, email, senha} = req.body
        let userTeam

        if(!nome || !email || !senha){
            return res.status(401).redirect('/cadastro')
        }

        team.findOne({
            where: {
                name: 'brasil'
            }
        }).then((result) => {
            userTeam = result.dataValues.id
        })

        users.findOne({
            where: {
                email: email
            }
        }).then((result) => {
            if (result) {
                return res.status(200).redirect('/login')
            }else{
                const passwordHash = bcrypt.hashSync(senha)

                users.create({
                    team_id: userTeam,
                    name: nome,
                    email: email,
                    password: passwordHash,
                    birth_date: '2004-01-01',
                    photograph: 'public/img/profileImage/avatar.png'
                })

                req.session.isAuthorized = true
                return res.status(200).redirect('/')
            }
        })
    }
}

module.exports = cadastroController
