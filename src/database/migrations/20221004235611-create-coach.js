'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'coach', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      team_id:{
          type: DataTypes.UUIDV4,
          references:{
              model: TeamModel,
              key:"id",
          }
      },
      name:{
          type: DataTypes.STRING(100),
          allowNull: false
      }, 
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coach');
  }
};
