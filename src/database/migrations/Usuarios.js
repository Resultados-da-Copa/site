const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
       
        `);
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('usuarios');
    },

}

