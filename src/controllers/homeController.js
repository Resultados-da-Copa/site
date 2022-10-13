const { article, matches, team } = require('../database')

const homeController = {
    home: async (req, res) => {
        let match = {}
        let home = []
        let visitors = []

        const articles = await article.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 6
        }).then((result) => {
            return result
        })

        match = await matches.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 6
        }).then(async result => {
            for(let i = 0; i < result.length; i++){
                home[i] = await team.findOne({
                    where: {
                        id: result[i].dataValues.home_team_id
                    }
                }).then(result => {
                    return result
                })
                visitors[i] = await team.findOne({
                    where: {
                        id: result[i].dataValues.visitors_team_id
                    }
                }).then(result => {
                    return result
                })
            }
            return result
        })
        
        const logged = req.session.isAuthorized
        res.render('index', { articles, match, home, visitors, logged})
    }
}

module.exports = homeController