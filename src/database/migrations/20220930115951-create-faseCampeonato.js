'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'FaseCampeonato', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      CampeonatoID:{
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
      fase_iniciada: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      fase_finalizada: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      fase_pausada: {
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
    await queryInterface.dropTable('FaseCampeonato');
    
  }
};
