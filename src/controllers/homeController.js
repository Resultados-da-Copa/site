const { article, matches, team, goals, players, assistances } = require('../database')

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

        let stats = await getStats()

        const logged = req.session.isAuthorized
        res.render('index', { articles, match, home, visitors, logged, stats })
    }
}

async function getStats(){  
    let statsData = {}

    const goal = await goals.count({
        col: 'id'
    })

    const assistance = await assistances.count({
        col: 'id'
    })

    statsData.goals = goal
    statsData.assistances = assistance
    statsData.gunner = await getGoals()
    statsData.assistancesLeader = await getAssistances()

    return statsData
}

async function getGoals(){
    const findPlayer = await goals.findAll({
        group: 'id_player',
        order: [["id_player", "DESC"]]
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        name: playerData.name,
    }
}

async function getAssistances(){
    const findPlayer = await assistances.findAll({
        group: 'id_player',
        order: [["id_player", "DESC"]]
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        name: playerData.name,
    }
}

module.exports = homeController