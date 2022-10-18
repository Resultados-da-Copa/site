module.exports = (sequelize, DataTypes) => {
    const goals = sequelize.define(
        'goals',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            id_player: {
                type: DataTypes.UUIDV4
            },
            id_match: {
                type: DataTypes.UUIDV4
            },
            id_team_scored: {
                type: DataTypes.UUIDV4
            },
            id_team_conceded: {
                type: DataTypes.UUIDV4
            },
            minute: {
                type: DataTypes.INTEGER
            },
            createdAt:{
                type: DataTypes.DATE
            },
        },
        {
            tableName: "goals",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    ); 

    return goals;
}