const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const Tecnico = sequelize.define(
    'Tecnico',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        EquipeID:{
            type: DataTypes.UUIDV4,
            references:{
                model: EquipeModel,
                key:"id",
            }
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
     },
    {
        tableName: "tecnicos",
    }
); 

Tecnico.belongsTo(Equipe, {
    constraint: true,
    foreignKey: "EquipeID",
})


module.exports = Tecnico;