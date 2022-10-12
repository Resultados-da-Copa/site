'use strict';

const { team } = require('../../database')
const { cupGroup } = require('../../database')
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('matches', [{
      id: uuid(),
      cup_groupID: cupGroup.findOne({
        where: {
          name: 'a'
        }
      }),
      home_teamID: team.findOne({
        where: {
          name: 'qatar'
        }
      }).then(result => {
        return result.validValues.id
      }),
      visitors_teamID: team.findOne({
        where: {
          name: 'brasil'
        }
      }).then(result => {
        return result.validValues.id
      }),
      started_match: false,
      end_match: false,
      stopped_match: false,
      match_date: new Date(),
      stadium: 'jedah arena'
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
