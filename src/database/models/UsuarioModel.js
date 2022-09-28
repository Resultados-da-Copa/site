const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const Usuario = sequelize.define(
    'Usuario',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false
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

module.exports = Usuario;