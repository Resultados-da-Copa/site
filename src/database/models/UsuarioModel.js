const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')
const Equipe = require('./EquipeModel')

const Usuario = sequelize.define(
    'Usuario',
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
        email:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(32),
          },
        dataNascimento:{
            type: DataTypes.DATE,
            defaultValue: false,
            field: "data_nascimento",
        },
        foto:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "usuarios",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

Usuario.belongsTo(Equipe, {
    constraint: true,
    foreignKey: "EquipeID",
})


module.exports = Usuario;