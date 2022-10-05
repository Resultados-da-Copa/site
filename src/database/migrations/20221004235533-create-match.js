'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable(
            'match', {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true
                },
                cup_group_id: {
                    type: DataTypes.UUIDV4,
                    references: {
                        model: CupGroupModel,
                        key: "id",
                    }
                },
                home_team_id: {
                    type: DataTypes.UUIDV4,
                    references: {
                        model: TeamModel,
                        key: "id",
                    }
                },
                visitors_team_id: {
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
                started_match: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                end_match: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                stopped_match: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                },
                createdAt: {
                    type: DataTypes.DATE
                },
            });

    },


    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('match');
    }
};
