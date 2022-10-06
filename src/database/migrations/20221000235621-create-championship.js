'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'championship', 
      { 
        id:{
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      name:{
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
      },
      started_championship: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
      },
      finished_championship: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
      },
      stopped_championship: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
      },
      createdAt:{
          type: Sequelize.DataTypes.DATE,
      }, 
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('championship');
  }
};
