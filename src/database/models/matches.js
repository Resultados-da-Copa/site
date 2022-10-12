module.exports = (sequelize, DataTypes) => {
    const matches = sequelize.define(
        'matches',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            cup_stage_id:{
                type: DataTypes.UUIDV4,
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
            match_date: {
                type: DataTypes.DATE,
                defaultValue: false,
            },
            stadium: {
                type: DataTypes.STRING(100),
                defaultValue: false,
            },
            createdAt:{
                type: DataTypes.DATE
            },
        },
        {
            tableName: "matches",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    ); 

    /* match.belongsTo.associate((models) => {
        match.belongsTo(cup_group, {
            constraint: true,
            foreignKey: "cup_groupID",
        });
    });
    
    match.belongsTo.associate((models) => {
        match.belongsTo(team, {
            constraint: true,
            foreignKey: "home_teamID",
        });
    });
    
    match.belongsTo.associate((models) => {
        match.belongsTo(team, {
        constraint: true,
        foreignKey: "visitors_teamID",
        });
    }); */

    return matches;
}