'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'stats', {
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
                team_id: {
                    type: Sequelize.DataTypes.UUID,
                    references: {
                        model: "team",
                        key: "id",
                    }
                },
                first_half: {
                    type: Sequelize.DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                second_half: {
                    type: Sequelize.DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                yellow_cards: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                red_cards: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                impediments: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                corner: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                offside: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                goals: {
                    type: Sequelize.DataTypes.INTEGER,
                    defaultValue: false,
                },
                createdAt: {
                    type: Sequelize.DataTypes.DATE,
                },
            });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('stats');
    }
};
