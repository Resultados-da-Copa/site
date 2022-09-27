const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('escalacoes', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            down: async (queryInterface, _Sequelize) => {
                await queryInterface.dropTable('escalacoes');
            },
        });
    },
}

