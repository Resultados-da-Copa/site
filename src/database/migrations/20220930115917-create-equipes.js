'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Equipes',
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
        sigla:{
          type: DataTypes.STRING(100),
          defaultValue: false,
        },
        bandeira:{
          type: DataTypes.STRING(500),
          allowNull: false
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
      });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Equipes');
    
  }
};
