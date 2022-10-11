'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(
      'article',
      {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        article_cover: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: false
        },
        article_headline: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        article_paragraphs: {
          type: Sequelize.DataTypes.TEXT(),
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
        }
      }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('article');
  }
};
