const usersController = {
    home: (req, res)=>{
        res.render('index')
    },
    stats: (req, res)=>{
        res.render('stats')
    },
    resultados: (req, res)=>{
        res.render('resultados')
    },
    perfil: (req, res)=>{
        res.render('perfil')
    },
    login: (req, res)=>{
        res.render('login')
    },
    cadastro: (req, res)=>{
        res.render('cadastro')
    }
}

module.exports = usersController