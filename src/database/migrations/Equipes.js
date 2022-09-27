const Sequelize = require("sequelize");
const connection = require("../connectionDB");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('equipes', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            sigla: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bandeira: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });
    },

    down: async (queryInterface, _Sequelize) => {
        await queryInterface.dropTable('equipes');
    }
};


Equipe.hasMany('Usuario');
//hasMany => uma pertence a varios


