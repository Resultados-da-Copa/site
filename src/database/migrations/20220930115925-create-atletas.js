'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users', 
      { 
        id:{
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
      },
      EquipeID:{
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
      foto:{
          type: DataTypes.STRING(500),
          allowNull: false
      },
      dataNascimento:{
          type: DataTypes.DATE,
          defaultValue: false,
          field: "data_nascimento",
      },
      nacionalidade:{
          type: DataTypes.STRING(500),
          allowNull: false
      },
      peso:{
          type: DataTypes.DECIMAL(2, 2),
          allowNull: false
      },
      numero_camiseta: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      altura: {
          type: DataTypes.DECIMAL(2, 2),
          allowNull: false,
      },
      pe_dominante: {
          type: DataTypes.STRING(100),
          allowNull: false,
      },
      });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
    
  }
};
