const Sequelize = require("sequelize");
const connection = require("../connectionDB");
const Usuario = require("./Equipes");

const Equipe = connection.define('esquipes',{
    name:{
        type: Sequelize.STRING,
    },sigla:{
        type: Sequelize.STRING,
    },bandeira:{
        type: Sequelize.STRING,
    }
})
Equipe.hasMany('Usuario'); //uma equipe pode pertencer a varios usuarios
Usuario.belongsTo('Equipe'); //um usuario pertence a uma equipe


Equipe.sync({force: true})
module.exports = Equipe;