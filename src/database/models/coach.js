const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const coach = sequelize.define(
    'coach',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        team_id:{
            type: DataTypes.UUIDV4,
            references:{
                model: TeamModel,
                key:"id",
            }
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
     },
    {
        tableName: "coach",
    }
); 

coach.belongsTo(team, {
    constraint: true,
    foreignKey: "team_id",
})


module.exports = coach;