const bcrypt = require('bcryptjs')
const {users} = require('../database')

const loginController = {
    renderpage: (req, res) => {
        if (!req.session.isAuthorized) {
            return res.render('login')
        }
        res.status(200).redirect('/perfil')
    },

    login: (req, res) => {
        const { email, senha } = req.body

        users.findOne({
            where: {
                email: email
            }
        }).then((result) => {
            if (!result) {
                return res.status(401).redirect('/login')
            }else{
                const senhaCorreta = bcrypt.compareSync(senha, result.dataValues.password)

                if (!senhaCorreta) {
                    return res.status(401).redirect('/login')
                }

                req.session.idUser = result.dataValues.id
                req.session.isAuthorized = true
                return res.status(200).redirect('/')
            }
        })
    }
}

module.exports = loginController
