const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('partidas', {
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
    data:{
        type: Sequelize.DATE,
        defaultValue: false,
    },
    partida_iniciada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    partida_finalizada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    partida_pausada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('partidas');
    },
});
},
}

