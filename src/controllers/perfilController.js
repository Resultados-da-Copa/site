const { users, team } = require('../database')
const bcrypt = require('bcryptjs')

const perfilController = {
    perfil: async (req, res) => {
        if (!req.session.isAuthorized) {
            return res.status(401).redirect('/login')
        }
        let userData = {}
        const user = await users.findOne({
            where: {
                id: req.session.idUser
            }
        })

        userData.nome = user.name
        userData.email = user.email
        userData.birth_date = user.birth_date
        userData.photograph = user.photograph
        userData.team = await team.findOne({
            where: {
                id: user.team_id
            }
        }).then(res => {
            return res.dataValues.name
        })

        const logged = req.session.isAuthorized

        res.render('perfil', { userData, logged })
    },

    updateProfile: async (req, res) => {
        let { name, email, password, user_team, date } = req.body
        let updateUser = {}
        const imageprofile = undefined
        const passwordHash = bcrypt.hashSync(password)

        if (user_team) {
            user_team = await team.findOne({
                where: {
                    name: user_team
                }
            }).then((result) => {
                if (result) {
                    return result.dataValues.id
                } else {
                    return undefined
                }
            })
        }

        if (name) { updateUser.name = name }
        if (email) { updateUser.email = email }
        if (password) { updateUser.password = passwordHash }
        if (date) { updateUser.birth_date = date }
        if (user_team) { updateUser.team_id = user_team }
        if (imageprofile) { updateUser.photograph = req.file.filename }

        await users.update(
            updateUser,
            {
                where: { id: req.session.idUser }
            }
        )

        return res.status(200).redirect('/perfil')
    }
}

module.exports = perfilController