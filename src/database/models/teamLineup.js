
module.exports = (sequelize, DataTypes) => {
    const teamLineup = sequelize.define(
        'team_lineup',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            playerID:{
                type: DataTypes.UUIDV4,
            },
            matchID:{
                type: DataTypes.UUIDV4,
            },
            starting_players: {
                type: DataTypes.STRING,
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
            createdAt:{
                type: DataTypes.DATE,
                field: "createdAt",
            },
        },
        {
            tableName: "team_lineup",
            timestamps: true,
            createdAt: "createdAt",
        }
    ); 
    
    stats.hasMany.associate((models) => {
        teamLineup.hasMany(models.player, {
            constraint: true,
            foreignKey: "playerID",
        });
    });
    stats.hasMany.associate((models) => {
        teamLineup.hasMany(models.match, {
            constraint: true,
            foreignKey: "matchID",
        });
    });

    return teamLineup
}