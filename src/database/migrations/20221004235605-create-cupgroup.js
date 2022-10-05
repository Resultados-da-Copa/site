'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'cup_group',
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      cup_stage_id:{
          type: DataTypes.UUIDV4,
          references:{
              model: CupStageModel,
              key:"id",
          }
      },
      name:{
          type: DataTypes.STRING(100),
          allowNull: false
      },
      createdAt:{
          type: DataTypes.DATE,
      },
      });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cup_group');
  }
};
