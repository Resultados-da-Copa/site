const Sequelize = require('sequelize');

const Sequelize = new Sequelize('db', 'root',{
    host: 'localhost',
    dialect: 'mysql2'
});

module.exports = connection;