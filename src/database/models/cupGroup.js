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
            cup_stageID: {
                type: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            started_cup_stage: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            finished_cup_stage: {
                type: DataTypes.BOOLEAN,
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
    );

    /* cupGroup.associate((models) => {
        cupGroup.hasMany(cup_stage, {
            constraint: true,
            foreignKey: "cup_stageID",
        });

    }); */

    return cupGroup;
}


