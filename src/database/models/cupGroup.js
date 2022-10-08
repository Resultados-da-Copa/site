module.exports = (sequelize, DataTypes) => {
    const cupGroup = sequelize.define(
        'cup_group',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
<<<<<<< HEAD
            cup_stageID: {
=======
            cup_stageID:{
>>>>>>> main
                type: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "cup_group",
            timestamps: true,
        }
<<<<<<< HEAD
    );

    /* cupGroup.associate((models) => {
        cupGroup.hasMany(cup_stage, {
            constraint: true,
            foreignKey: "cup_stageID",
        });

    }); */
=======
    ); 

    cupGroup.associate((models) => {
        cupGroup.hasMany(models.cup_stage, {
            constraint: true,
            foreignKey: "cup_stageID",
    });
    
});
>>>>>>> main

    return cupGroup;
}


