const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('estatisticas', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            primeiro_tempo: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            segundo_tempo: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            gols: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cartoes_amarelo: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cartoes_vermelho: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            impedimentos: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            faltas: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        })
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('estatisticas');
    },
}
   
