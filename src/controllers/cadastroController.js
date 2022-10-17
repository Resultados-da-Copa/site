const { users } = require('../database')
const { team } = require('../database')
const bcrypt = require('bcryptjs')


const cadastroController = {
    renderpage: (req, res) => {
        if (!req.session.isAuthorized) {

            const logged = req.session.isAuthorized

            res.status(200).render('cadastro', { logged })
        }

        res.status(200).redirect('/perfil')
    },

    cadastro: async (req, res) => {
        const { nome, email, senha } = req.body

        if (!nome || !email || !senha) {
            return res.status(401).redirect('/cadastro')
        }

        const userTeam = await team.findOne({
            where: {
                name: 'brasil'
            }
        })

        const user = await users.findOne({
            where: {
                email
            }
        })

        if (user) {
            return res.status(200).redirect('/login')
        }
        const passwordHash = bcrypt.hashSync(senha)

        await users.create({
            team_id: userTeam.id,
            name: nome,
            email,
            password: passwordHash,
            birth_date: '2004-01-01',
            photograph: 'avatar.png'
        })

        req.session.isAuthorized = true
        return res.status(200).redirect('/')
    }
}

module.exports = cadastroController
