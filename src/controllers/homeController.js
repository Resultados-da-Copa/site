const { article } = require('../database')

const homeController = {
    home: async (req, res) => {
        const articles = await article.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 6
        }).then((result) => {
            return result
        })
        
        res.render('index', { articles })
    }
}


module.exports = homeController