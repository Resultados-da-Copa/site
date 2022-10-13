const estatisticasController = {
    estatisticas: (req, res) => {
        const logged = req.session.isAuthorized

        res.render('estatisticas', { logged })
    }
}

module.exports = estatisticasController