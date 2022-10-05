'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'players', {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                team_id: {
                    type: DataTypes.UUIDV4,
                    references: {
                        model: TeamModel,
                        key: "id",
                    }
                },
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: false
                },
                photograph: {
                    type: DataTypes.STRING(500),
                    allowNull: false
                },
                birth_date: {
                    type: DataTypes.DATE,
                    defaultValue: false,
                },
                nationality: {
                    type: DataTypes.STRING(500),
                    allowNull: false
                },
                weight: {
                    type: DataTypes.DECIMAL(2, 2),
                    allowNull: false
                },
                number: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                height: {
                    type: DataTypes.DECIMAL(2, 2),
                    allowNull: false,
                },
                foot: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
            });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('players');
    }
};
