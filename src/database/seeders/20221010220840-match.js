'use strict';

const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('match', [{
      id: uuid(),
      cup_groupID: '',
      home_teamID: '',
      visitors_teamID: '',
      name: '',
      started_match: '',
      end_match: '',
      stopped_match: '',  
      //data da partida,
      //nome do estádio
    }]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
