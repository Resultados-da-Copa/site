const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('tecnicos', {
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
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('tecnicos');
    },
});
},
}

