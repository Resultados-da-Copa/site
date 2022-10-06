'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'coach', 
      { 
        id:{
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      team_id:{
          type: Sequelize.DataTypes.UUID,
          references:{
              model: "team",
              key:"id",
          }
      },
      name:{
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
      }, 
      });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coach');
  }
};
