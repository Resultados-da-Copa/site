const { matches, team, cup_stage, cup_group, players, coach } = require('../database')

const partidaController = {
    partida: async (req, res) => {
        const matchData = await matches.findOne({
            where: {
                id: req.params.id
            }
        }).then(async result => {
            return result
        })

        const home = await team.findOne({
            where: {
                id: matchData.dataValues.home_team_id
            }
        }).then(result => {
            return result
        })

        const visitors = await team.findOne({
            where: {
                id: matchData.dataValues.visitors_team_id
            }
        }).then(result => {
            return result
        })

        const cupStage = await cup_stage.findOne({
            where: {
                id: matchData.dataValues.cup_stage_id
            }
        }).then(result => {
            switch (result.dataValues.name) {
                case 'Group Stage':
                    return 'Fase de Grupos'
                default:
                    return 'Fase de Grupos'
            }
        })

        const cupGroup = await cup_group.findOne({
            where: {
                id: matchData.dataValues.cup_group_id
            }
        }).then(result => {
            return result.dataValues.name
        })

        const homePlayers = await players.findAll({
            where: {
                team_id: home.dataValues.id
            }
        }).then(result => {
            return result
        })

        const visitorsPlayers = await players.findAll({
            where: {
                team_id: visitors.dataValues.id
            }
        }).then(result => {
            return result
        })

        const homeCoach = await coach.findOne({
            where: {
                team_id: home.dataValues.id
            }
        }).then(result => {
            return result.dataValues.name
        })
        
        const visitorsCoach = await coach.findOne({
            where: {
                team_id: visitors.dataValues.id
            }
        }).then(result => {
            return result.dataValues.name
        })


        res.render('partida',
            {
                matchData,
                home,
                visitors,
                cupStage,
                cupGroup,
                homePlayers,
                visitorsPlayers,
                homeCoach,
                visitorsCoach
            })
    }
}


module.exports = partidaController