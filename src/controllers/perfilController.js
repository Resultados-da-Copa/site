const { users } = require('../database')
const { team } = require('../database')
const bcrypt = require('bcryptjs')

const perfilController = {
    perfil: async (req, res) => {
        if (!req.session.isAuthorized) {
            return res.status(401).redirect('/login')
        }
        let userData = {}
        console.log(req.session.idUser)
        await users.findOne({
            where: {
                id: req.session.idUser
            }
        }).then((result) => {

            userData.nome = result.dataValues.name
            userData.email = result.dataValues.email
            userData.birth_date = result.dataValues.birth_date
            userData.photograph = result.dataValues.photograph
        })
        res.render('perfil', {userData})
    },

    updateProfile: (req, res) => {
        let { name, email, password, user_team, date } = req.body
        let updateUser = {}
        const imageprofile = req.file.filename
        console.log(imageprofile)
        const passwordHash = bcrypt.hashSync(password)

        team.findOne({
            where: {
                name: user_team
            }
        }).then((result) => {
            if(result){
                user_team = result.dataValues.id
            } else {
                user_team = ''
            }
        })

        if(name !== ''){updateUser.name = name}
        if(email !== ''){updateUser.email = email}
        if(password !== ''){updateUser.password = passwordHash}
        if(date !== ''){updateUser.birth_date = date}
        if(user_team !== ''){updateUser.team_id = user_team}
        //if(imageprofile !== undefined){updateUser.photograph = imageprofile}
        
        users.update(
            updateUser,
            {
                where: {id: req.session.idUser}
            }
        )

        return res.status(200).redirect('/perfil')
    }
}

module.exports = perfilController