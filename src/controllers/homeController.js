const { article, matches, team } = require('../database')

const homeController = {
    home: async (req, res) => {
        let home = []
        let visitors = []

        const articles = await article.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 6
        })

        const match = await matches.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 6
        })

        for (let i = 0; i < match.length; i++) {
            home[i] = await team.findOne({
                where: {
                    id: match[i].home_team_id
                }
            }).then(result => {
                return result
            })
            visitors[i] = await team.findOne({
                where: {
                    id: match[i].visitors_team_id
                }
            }).then(result => {
                return result
            })
        }

        const logged = req.session.isAuthorized
        res.render('index', { articles, match, home, visitors, logged })
    }
}

module.exports = homeController