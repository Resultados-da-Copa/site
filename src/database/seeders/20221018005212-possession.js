'use strict';

const { v4: uuid } = require('uuid');
const { team, matches } = require('../../database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('possession', [{
      
      id: uuid(),
      id_match: await matches.findOne({
        where: {
          stopped_match: 1
        }
      }).then(result => {
        return result.dataValues.id
      }),
      id_home_team: await team.findOne({
        where: {
          name: 'brasil'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      id_visitor_team: await team.findOne({
        where: {
          name: 'qatar'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      createdAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('possession', null, {});
  }
};
