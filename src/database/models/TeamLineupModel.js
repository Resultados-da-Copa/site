const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const player = require('./PlayerModel');
const match = require('./MatchModel');

const team_lineup = sequelize.define(
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
            references:{
                model: MatchModel,
                key:"id",
            }
        },
        match_id:{
            type: DataTypes.UUIDV4,
            references:{
                model: MatchModel,
                key:"id",
            }
        },
        starting_players: {
            type: DataTypes.String,
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

team_lineup.hasMany(player, {
    constraint: true,
    foreignKey: "player_id",
})
team_lineup.hasMany(match, {
    constraint: true,
    foreignKey: "match_id",
})

module.exports = team_lineup;