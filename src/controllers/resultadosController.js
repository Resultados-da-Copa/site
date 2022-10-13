const resultadosController = {
    resultados: (req, res) => {
        const logged = req.session.isAuthorized

        res.render('resultados', { logged })
    }
}

module.exports = resultadosController