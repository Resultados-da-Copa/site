const { article } = require('../database')

const noticiaController = {
    noticia: async (req, res) => {
        let articleData = {}
        let suggestedArticles = {}

        await article.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            const paragraphs = result.dataValues.article_paragraphs.split('break')

            articleData.cover = result.dataValues.article_cover
            articleData.headline = result.dataValues.article_headline
            articleData.paragraphs = paragraphs
        })

        await article.findAll({
            order: [
                ['createdAt', 'ASC']
            ],
            limit: 2
        }).then((result) => {
            suggestedArticles = result
        })

        console.log(suggestedArticles)

        res.render('noticia', { articleData, suggestedArticles })
    }
}

module.exports = noticiaController