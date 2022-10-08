module.exports = (sequelize, DataTypes) => {
    const cupStage = sequelize.define(
        'cup_stage',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            championshipID:{
                type: DataTypes.UUIDV4,
            },
            name:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            initial_stage: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            finish_stage: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            stopped_stage: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            createdAt:{
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "cup_stages",
            timestamps: true,
            createdAt: "createdAt",
        }
    ); 
<<<<<<< HEAD
    /* cupStage.associate((models) => {
        cupStage.hasMany(championship, {
        constraint: true,
        foreignKey: "championshipID",
    });
    }); */
=======
    cupStage.associate((models) => {
        cupStage.hasMany(models.championship, {
        constraint: true,
        foreignKey: "championshipID",
    });
    });
>>>>>>> main

    return cupStage;
}