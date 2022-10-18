'use strict';

const { v4: uuid } = require('uuid');
const { team, matches, players } = require('../../database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('red_cards', [{
      
      id: uuid(),
      id_player: await players.findOne({
        where: {
          name: 'richarlison'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      id_match: await matches.findOne({
        where: {
          stopped_match: 1
        }
      }).then(result => {
        return result.dataValues.id
      }),
      id_team: await team.findOne({
        where: {
          name: 'brasil'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      minute: 40,
      createdAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('red_cards', null, {});
  }
};
