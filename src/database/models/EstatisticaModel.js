const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const Estatistica = sequelize.define(
    'Estatistica',
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
        primeiroTempo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: "primeiro_tempo",
        },
        segundoTempo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: "segundo_tempo",
        },
        cartoesAmarelos: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            field: "cartoes_amarelos",
        },
        cartoesVermelhos: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            field: "cartoes_vermelhos",
        },
        impedimentos: {
            type: DataTypes.INTEGER,
            defaultValue: false,
        },
        escanteios: {
            type: DataTypes.INTEGER,
            defaultValue: false,
        },
        faltas: {
            type: DataTypes.INTEGER,
            defaultValue: false,
        },
        gols: {
            type: DataTypes.INTEGER,
            defaultValue: false,
        },        
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "estatisticas",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

module.exports = Estatistica;