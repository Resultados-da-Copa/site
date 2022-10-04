const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const Atleta = require('./AtletaModel');
const Partida = require('./PartidaModel');

const Estatistica = sequelize.define(
    'Estatistica',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        AtletaID:{
            type: DataTypes.UUIDV4,
            references:{
                model: AtletaModel,
                key:"id",
            }
        },
        PartidaID:{
            type: DataTypes.UUIDV4,
            references:{
                model: PartidaModel,
                key:"id",
            }
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

Estatistica.hasMany(Partida, {
    constraint: true,
    foreignKey: "PartidaID",
})
Estatistica.hasMany(Atleta, {
    constraint: true,
    foreignKey: "AtletaID",
})

module.exports = Estatistica;