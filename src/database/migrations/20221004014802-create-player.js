'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(
      'players',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        team_id: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "team",
            key: "id",
          }
        },
        name: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        photograph: {
          type: Sequelize.DataTypes.STRING(500),
          allowNull: false
        },
        birth_date: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: false,
        },
        nationality: {
          type: Sequelize.DataTypes.STRING(500),
          allowNull: false
        },
        weight: {
          type: Sequelize.DataTypes.DECIMAL(2, 2),
          allowNull: false
        },
        number: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        height: {
          type: Sequelize.DataTypes.DECIMAL(2, 2),
          allowNull: false,
        },
        foot: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false,
        },
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players');
  }
};
