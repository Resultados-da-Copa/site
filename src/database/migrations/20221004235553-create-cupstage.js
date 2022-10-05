'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'cup_stage', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      cup_id:{
          type: DataTypes.UUIDV4,
          references:{
              model: CampeonatoModel,
              key:"id",
          }
      },
      name:{
          type: DataTypes.STRING(100),
          allowNull: false
      },
      initial_stage: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      finish_stage: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      stopped_stage: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      createdAt:{
          type: DataTypes.DATE,
      },
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cup_stage');
  }
};