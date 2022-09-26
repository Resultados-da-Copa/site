const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('usuarios', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    foto:{
        type: Sequelize.STRING(200),
        allowNull: false,
    }, 
    data_nascimento:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('usuarios');
    },
});
},
}

usuarios.belongsTo('equipes'); 
// belongsTo => um  pertence a uma
