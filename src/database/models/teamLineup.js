
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
            player_id:{
                type: DataTypes.UUIDV4,
            },
            match_id:{
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
    
    // team_lineup.hasMany(player, {
    //     constraint: true,
    //     foreignKey: "player_id",
    // })
    // team_lineup.hasMany(match, {
    //     constraint: true,
    //     foreignKey: "match_id",
    // })

    return teamLineup
}