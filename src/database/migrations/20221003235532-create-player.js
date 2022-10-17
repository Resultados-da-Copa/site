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
        picture: {
          type: Sequelize.DataTypes.STRING(500),
          allowNull: false
        },
        birth_date: {
          type: Sequelize.DataTypes.DATE,
        },
        weight: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        number: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        height: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        foot: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false,
        },
        position: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false,
        },
        createdAt:{
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
      },
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players');
  }
};
