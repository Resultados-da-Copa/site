'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'match', {
                id: {
                    type: Sequelize.DataTypes.UUID,
                    defaultValue: Sequelize.DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
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
                name: {
                    type: Sequelize.DataTypes.STRING(100),
                    allowNull: false
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
                createdAt: {
                    type: Sequelize.DataTypes.DATE
                },
            });

    },


    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('match');
    }
};
