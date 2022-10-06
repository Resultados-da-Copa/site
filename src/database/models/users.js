const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')
const team = require('./team')

const users = sequelize.define(
    'users',
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
        email:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(32),
          },
        birth_date:{
            type: DataTypes.DATE,
            defaultValue: false,
        },
        photograph:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE
        },
     },
    {
        tableName: "users",
        timestamps: true
    }
); 

users.belongsTo(team, {
    constraint: true,
    foreignKey: "team_id",
})


module.exports = users;