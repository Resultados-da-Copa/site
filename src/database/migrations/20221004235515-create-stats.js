'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'stats', {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                player_id: {
                    type: DataTypes.UUIDV4,
                    references: {
                        model: PlayerModel,
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
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: false
                },
                first_half: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                second_half: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                yellow_cards: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                red_cards: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                impediments: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                corner: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                offside: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                goals: {
                    type: DataTypes.INTEGER,
                    defaultValue: false,
                },
                createdAt: {
                    type: DataTypes.DATE,
                },
            });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('stats');
    }
};
