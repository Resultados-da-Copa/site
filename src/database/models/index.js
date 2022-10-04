'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


  (async () => {
    const database = requite('../connectionDB.js')
  
    const Usuario = require('./UsuarioModel');
    const Escalacao = require('./EscalacaoModel');
    const Atleta = require('./AtletaModel');
    const Tecnico = require('./TecnicoModel');
    const FaseCampeonato = require('./FaseCampeonatoModel');
    const Campeonato = require('./CampeonatoModel');
    const GrupoCampeonato = require('./GrupoCampeonatoModel');
    const Partida = require('./PartidaModel');
    const Escalacao = require('./EscalacaoModel');
    const Estatistica = require('./EstatisticaModel');
  
    await database.sync({force: true});
  
    
  })();




Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});






module.exports = db;
