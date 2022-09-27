const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('atletas', {
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
      foto: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      nacionalidade: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      peso: {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: false,
      },
      numero_camiseta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      altura: {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: false,
      },
      pe_dominante: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('atletas');
  }
};


