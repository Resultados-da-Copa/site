'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(
      'team',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        abbreviation: {
          type: Sequelize.DataTypes.STRING(100),
          defaultValue: false,
        },
        flag: {
          type: Sequelize.DataTypes.STRING(500),
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
        },
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('team');
  }
};