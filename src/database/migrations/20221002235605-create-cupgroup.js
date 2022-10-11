'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cup_group',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        cup_stage_id: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: "cup_stage",
            key: "id",
          }
        },
        name: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        started_cup_stage: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false
        },
        finished_cup_stage: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
        },
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cup_group');
  }
};
