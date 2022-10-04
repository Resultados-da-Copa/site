'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Tecnicos', 
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
      });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tecnicos');
     
  }
};
