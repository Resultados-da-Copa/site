const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const cup_stage = require('./CupStageModel');

const cup_group = sequelize.define(
    'cup_group',
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        cup_stage_id:{
            type: DataTypes.UUIDV4,
            references:{
                model: CupStageModel,
                key:"id",
            }
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "cup_group",
        timestamps: true,
    }
); 


cup_group.hasMany(cup_stage, {
    constraint: true,
    foreignKey: "cup_stage_id",
})

module.exports = cup_group;