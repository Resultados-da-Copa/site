const usersController = {
    home: (req, res)=>{
        res.render('index')
    },
    partida: (req, res)=>{
        res.render('partida')
    }
    }


module.exports = usersController