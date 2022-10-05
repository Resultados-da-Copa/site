'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'team_lineup', {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                player_id: {
                    type: DataTypes.UUIDV4,
                    references: {
                        model: MatchModel,
                        key: "id",
                    }
                },
                match_id: {
                    type: DataTypes.UUIDV4,
                    references: {
                        model: MatchModel,
                        key: "id",
                    }
                },
                starting_players: {
                    type: DataTypes.String,
                    defaultValue: false,
                },
                substitutes_players: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },

                unrelated_players: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                createdAt: {
                    type: DataTypes.DATE,
                    field: "createdAt",
                },
            });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('team_lineup');
    }
};
