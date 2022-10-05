'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'championship', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      name:{
          type: DataTypes.STRING(100),
          allowNull: false
      },
      started_championship: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      finished_championship: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      stopped_championship: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      createdAt:{
          type: DataTypes.DATE,
      }, 
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('championship');
  }
};
