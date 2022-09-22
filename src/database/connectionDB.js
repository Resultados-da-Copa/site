const Sequelize = require('sequelize');

const Sequelize = new Sequelize('db', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;