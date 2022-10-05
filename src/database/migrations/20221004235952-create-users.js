'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
  await queryInterface.createTable(
    'users', 
    { 
      id:{
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    team_id:{
        type: Sequelize.DataTypes.UUID,
        references:{
            model: "team",
            key:"id",
        }
    },
    name:{
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(32),
      },
    birth_date:{
        type: Sequelize.DataTypes.DATE,
        defaultValue: false,
    },
    photograph:{
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
    },
    createdAt:{
        type: Sequelize.DataTypes.DATE
    }, 
    });
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
