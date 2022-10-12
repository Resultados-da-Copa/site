'use strict';

const { BOOLEAN } = require("sequelize");
const { v4: uuid } = require("uuid");
const { team, matches, players } = require('../../database');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('stats', [{

      id: uuid(),
      match_id: await matches.findOne({
        where: {
          stopped_match: 1
        }
      }).then(result => {
        return result.dataValues.id
      }),
      team_id: await team.findOne({
        where: {
          name: 'brasil'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      player_id: await players.findOne({
        where: {
          name: 'richarlison'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      first_half: false,
      second_half: true,
      yellow_cards: 2,
      red_cards: 0,
      impediments: 18,
      corner: 7,
      offside: 35,
      goals: 3,
      createdAt: new Date()
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('stats', null, {});
  }
};