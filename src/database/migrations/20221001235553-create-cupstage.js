'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cup_stage',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        cup_id: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "championship",
            key: "id",
          }
        },
        name: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        initial_stage: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
        },
        finish_stage: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
        },
        stopped_stage: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cup_stage');
  }
};