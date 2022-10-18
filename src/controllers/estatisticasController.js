const { goals, players, assistances, shots_on_target, yellow_cards, red_cards, fouls, defenses } = require('../database')

const estatisticasController = {
    estatisticas: async (req, res) => {
        const logged = req.session.isAuthorized
        let data = {}

        data.goals = await getGoals()
        data.assistances = await getAssistances()
        data.shotsOnTarget = await getShotsOnTarget()
        data.yellowCards = await getYellowCards()
        data.redCards = await getRedCards()
        data.fouls = await getFouls()
        data.defenses = await getDefenses()

        console.log(data)

        res.render('estatisticas', { logged, data })
    }
}

async function getGoals(){
    const findPlayer = await goals.findAll({
        group: 'id_player',
        order: [["id_player", "DESC"]]
    })

    const countOccurrences = await goals.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

async function getAssistances(){
    const findPlayer = await assistances.findAll({
        group: 'id_player',
        order: [["id_player", "DESC"]]
    })

    const countOccurrences = await assistances.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

async function getShotsOnTarget(){
    const findPlayer = await shots_on_target.findAll({
            group: 'id_player',
            order: [["id_player", "DESC"]]
        })

    const countOccurrences = await shots_on_target.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

async function getYellowCards(){
    const findPlayer = await yellow_cards.findAll({
            group: 'id_player',
            order: [["id_player", "DESC"]]
        })

    const countOccurrences = await yellow_cards.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

async function getRedCards(){
    const findPlayer = await red_cards.findAll({
            group: 'id_player',
            order: [["id_player", "DESC"]]
        })

    const countOccurrences = await red_cards.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

async function getFouls(){
    const findPlayer = await fouls.findAll({
            group: 'id_player',
            order: [["id_player", "DESC"]]
        })

    const countOccurrences = await fouls.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

async function getDefenses(){
    const findPlayer = await defenses.findAll({
            group: 'id_player',
            order: [["id_player", "DESC"]]
        })

    const countOccurrences = await defenses.count({
        where: {
            id_player: findPlayer[0].id_player
        }
    })

    const playerData = await players.findOne({
        where: {
            id: findPlayer[0].id_player
        }
    })

    return result = {
        picture: playerData.picture,
        name: playerData.name,
        number: playerData.number,
        position: playerData.position,
        occurrences: countOccurrences

    }
}

module.exports = estatisticasController