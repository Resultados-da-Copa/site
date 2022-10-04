'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(
      'Usuarios',
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
      email:{
          type: DataTypes.STRING(100),
          allowNull: false
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(32),
      },
      dataNascimento:{
          type: DataTypes.DATE,
          defaultValue: false,
          field: "data_nascimento",
      },
      foto:{
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
    await queryInterface.dropTable('Usuarios');
    
  }
};
