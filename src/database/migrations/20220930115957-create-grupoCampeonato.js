'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'GrupoCampeonato', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      FaseCampeonatoID:{
          type: DataTypes.UUIDV4,
          references:{
              model: FaseCampeonatoIDModel,
              key:"id",
          }
      },
      name:{
          type: DataTypes.STRING(100),
          allowNull: false
      },
      dataCriacao:{
          type: DataTypes.DATE,
          field: "data_criacao",
      },
      });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('GrupoCampeonato');
    
  }
};
