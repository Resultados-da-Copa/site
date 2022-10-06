module.exports = (sequelize, DataTypes) => {
    const match = sequelize.define(
        'match',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            cup_group_id:{
                type: DataTypes.UUIDV4,
            },
            home_team_id:{
                type: DataTypes.UUIDV4,
            },
            visitors_team_id:{
                type: DataTypes.UUIDV4,
            },
            name:{
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
            createdAt:{
                type: DataTypes.DATE
            },
        },
        {
            tableName: "match",
            timestamps: true,
            createdAt: "createdAt",
        }
    ); 
    
    // match.belongsTo(cup_group, {
    //     constraint: true,
    //     foreignKey: "cup_group_id",
    // })
    // match.belongsTo(team, {
    //     constraint: true,
    //     foreignKey: "home_team_id",
    // })
    // match.belongsTo(team, {
    //     constraint: true,
    //     foreignKey: "visitors_team_id",
    // })

    return match;
}