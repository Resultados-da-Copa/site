const fs = require ('fs');

function logSite(req, res, next) {
  fs.appendFileSync('log.txt', "Acesso ao site em: " + req.url)
next();

}

module.exports = logSite;
