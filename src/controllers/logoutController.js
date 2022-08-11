const logoutController = {
    logout: (req, res) => {
        req.session.isAuthorized = false
        res.status(200).redirect('/')
    }
}

module.exports = logoutController