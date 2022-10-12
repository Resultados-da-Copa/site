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
            cupStageID:{
                type: DataTypes.UUIDV4,
            },
            cup_groupID:{
                type: DataTypes.UUIDV4,
            },
            home_teamID:{
                type: DataTypes.UUIDV4,
            },
            visitors_teamID:{
                type: DataTypes.UUIDV4,
            },
            matchDate:{type: DataTypes.DATE,
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
            match_date: {
                type: DataTypes.DATE,
                defaultValue: false,
            },
            stadium: {
                type: DataTypes.STRING(),
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