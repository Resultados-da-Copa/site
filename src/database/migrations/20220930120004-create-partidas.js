'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Partida', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      GrupoCampeonatoID:{
          type: DataTypes.UUIDV4,
          references:{
              model: GrupoCampeonatoModel,
              key:"id",
          }
      },
      Equipe_MandanteID:{
          type: DataTypes.UUIDV4,
          references:{
              model: EquipeModel,
              key:"id",
          }
      },
      Equipe_VisitanteID:{
          type: DataTypes.UUIDV4,
          references:{
              model: EquipeModel,
              key:"id",
          }
      },
      name:{
          type: DataTypes.STRING(100),
          allowNull: false
      },
      Partida_iniciada: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      Partida_finalizada: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      Partida_pausada: {
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
    
    await queryInterface.dropTable('Partida');
   
  }
};
