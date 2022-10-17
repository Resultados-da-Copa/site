'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'matches', {
            id: {
                type: Sequelize.DataTypes.UUID,
                defaultValue: Sequelize.DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            cup_stage_id: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: "cup_stage",
                    key: "id",
                }
            },
            cup_group_id: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: "cup_group",
                    key: "id",
                }
            },
            home_team_id: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: "team",
                    key: "id",
                }
            },
            visitors_team_id: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: "team",
                    key: "id",
                }
            },
            started_match: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false,
            },
            end_match: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false,
            },
            stopped_match: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false,
            },
            match_date: {
                type: Sequelize.DataTypes.DATE
            },
            stadium: {
                type: Sequelize.DataTypes.STRING(100),
                defaultValue: false,
            },
            tie: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false
            },
            winner: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: "team",
                    key: "id",
                },
                allowNull: true
            },
            loser: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: "team",
                    key: "id",
                },
                allowNull: true
            },
            round: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DataTypes.DATE
            },
        });

    },


    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('matches');
    }
};
