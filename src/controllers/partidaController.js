const { match } = require('../database')

const partidaController = {
    partida: (req, res)=>{
        /* match.findOne({
            where: {
                id: req.params.id
            }
        }) */

        console.log(req.params.id)

        res.render('partida')
    }
}


module.exports = partidaController