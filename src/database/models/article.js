module.exports = (sequelize, DataTypes) => {
    const article = sequelize.define(
        'article',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            article_cover: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            article_headline:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            article_paragraphs:{
                type: DataTypes.STRING(),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
            }
        },
        {
            tableName: "article",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    );
    return article;
}