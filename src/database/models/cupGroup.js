module.exports = (sequelize, DataTypes) => {
    const cupGroup = sequelize.define(
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
    // cup_group.hasMany(cup_stage, {
    //     constraint: true,
    //     foreignKey: "cup_stage_id",
    // })

    return cupGroup;
}


