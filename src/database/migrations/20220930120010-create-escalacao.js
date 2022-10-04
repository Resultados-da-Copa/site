'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Escalacao', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      AtletaID:{
          type: DataTypes.UUIDV4,
          references:{
              model: AtletaModel,
              key:"id",
          }
      },
      PartidaID:{
          type: DataTypes.UUIDV4,
          references:{
              model: PartidaModel,
              key:"id",
          }
      },
      jogadoresTitulares: {
          type: DataTypes.String,
          defaultValue: false,
          field: "jogadores_titulares",
      },
      jogadoresReservas: {
          type: DataTypes.INTEGER,
          defaultValue: false,
          field: "jogadores_reservas",
      },
      jogadoresCortados: {
          type: DataTypes.INTEGER,
          defaultValue: false,
          field: "jogadores_cortados",
      },
      dataCriacao:{
          type: DataTypes.DATE,
          field: "data_criacao",
      },
      });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Escalacao');
     
  }
};
