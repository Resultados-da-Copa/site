
const ValidationMiddleware = (req, res, next) => {
    if (!req.body.Email || !req.body.Pass)
      res.status(406).send({ err: "entrada de dados invalida"});
  
  
    next();
  }
  
  
  app.post('/', ValidationMiddleware, function(req, res) {
    res.send({ msg: "Sucesso", email: req.body.Email});
  })

  module.exports = ValidationMiddleware;