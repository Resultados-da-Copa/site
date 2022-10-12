'use strict';

const { cup_group, team } = require('../../database')
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('matches', [{
      id: uuid(),
      cup_group_id: await cup_group.findOne({
        where: {
          name: 'a'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      home_team_id: await team.findOne({
        where: {
          name: 'qatar'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      visitors_team_id: await team.findOne({
        where: {
          name: 'brasil'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      started_match: false,
      end_match: false,
      stopped_match: true,
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
