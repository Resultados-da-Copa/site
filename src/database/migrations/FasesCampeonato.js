const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('fases_campeonatos', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    fase_iniciada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    fase_finalizada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    fase_pausada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('fases_campeonatos');
    },
});
},
}

