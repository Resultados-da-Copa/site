'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'offsides',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        id_player: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "players",
            key: "id",
          },
          allowNull: false
        },
        id_match: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "matches",
            key: "id",
          },
          allowNull: false
        },
        id_team: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "team",
            key: "id",
          },
          allowNull: false
        },
        minute: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('offsides');
  }
};