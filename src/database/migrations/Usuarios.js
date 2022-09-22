const Sequelize = require("sequelize");
const connection = require("../connectionDB");

const Usuario = connection.define('usuarios',{
    name:{
        type: Sequelize.STRING,
    },email:{
        type: Sequelize.STRING,
    },foto:{
        type: Sequelize.STRING,
    }, data_nascimento:{
        type: Sequelize.DATE,
    }
})

Usuario.sync({force: true})

module.exports = Usuario;