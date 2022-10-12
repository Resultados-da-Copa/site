'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'team_lineup', {
                id: {
                    type: Sequelize.DataTypes.UUID,
                    defaultValue: Sequelize.DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                player_id: {
                    type: Sequelize.DataTypes.UUID,
                    references: {
                        model: "players",
                        key: "id",
                    }
                },
                match_id: {
                    type: Sequelize.DataTypes.UUID,
                    references: {
                        model: "matches",
                        key: "id",
                    }
                },
                starting_players: {
                    type: Sequelize.DataTypes.STRING,
                    defaultValue: false,
                },
                substitutes_players: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },

                unrelated_players: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                createdAt: {
                    type: Sequelize.DataTypes.DATE,
                    field: "createdAt",
                },
            });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('team_lineup');
    }
};
