'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Campeonatos',
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
      campeonato_iniciado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      campeonato_finalizado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      campeonato_pausado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      dataCriacao:{
          type: DataTypes.DATE,
          field: "data_criacao",
      },
       });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Campeonatos');
    
  }
};
