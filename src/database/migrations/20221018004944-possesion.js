'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'possession',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        id_match: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "matches",
            key: "id",
          },
          allowNull: false
        },
        id_home_team: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "team",
            key: "id",
          },
          allowNull: false
        },
        id_visitor_team: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "team",
            key: "id",
          },
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('possession');
  }
};