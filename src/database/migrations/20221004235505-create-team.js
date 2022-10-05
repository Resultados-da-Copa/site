'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'team',
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
        abbreviation:{
            type: DataTypes.STRING(100),
            defaultValue: false,
        },
        flag:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('team');
  }
};