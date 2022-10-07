module.exports = (sequelize, DataTypes) => {
    const stats= sequelize.define(
        'stats',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            playerID:{
                type: DataTypes.UUIDV4,
            },
            matchID:{
                type: DataTypes.UUIDV4,
            },
            name:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            first_half: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            second_half: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            yellow_cards: {
                type: DataTypes.INTEGER,
                defaultValue: false,
            },
            red_cards: {
                type: DataTypes.INTEGER,
                defaultValue: false,
            },
            impediments: {
                type: DataTypes.INTEGER,
                defaultValue: false,
            },
            corner: {
                type: DataTypes.INTEGER,
                defaultValue: false,
            },
            offside: {
                type: DataTypes.INTEGER,
                defaultValue: false,
            },
            goals: {
                type: DataTypes.INTEGER,
                defaultValue: false,
            },        
            createdAt:{
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "stats",
            timestamps: true,
            createdAt: "createdAt",
        }
    ); 
    
    stats.belongsTo.associate((models) => {
        stats.hasMany(match, {
            constraint: true,
            foreignKey: "matchID",
        });
    });

    stats.belongsTo.associate((models) => {
        stats.hasMany(player, {
            constraint: true,
            foreignKey: "playerID",
        });
    });

    return stats;
};