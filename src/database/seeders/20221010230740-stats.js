'use strict';

const { BOOLEAN } = require("sequelize");
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    


    await queryInterface.bulkInsert('stats', [{

      id: uuid(),
      matchID: '',
      teamID: '',
      playerID: '',
      first_half: '',
      second_half: '',
      yellow_cards: 2,
      red_cards: 0,
      impediments: 18,
      corner: 7, 
      offside: 35,
      goals: 3,
      createdAt : new Date
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('stats', null, {});
  }
};