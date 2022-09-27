const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('campeonatos', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            campeonato_iniciado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            campeonato_finalizado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            campeonato_pausado: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            down: async (queryInterface, _Sequelize) => {
                await queryInterface.dropTable('campenatos');
            },
        });
    },
}

