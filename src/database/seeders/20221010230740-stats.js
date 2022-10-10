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
      yellow_cards: '',
      red_cards: '',
      impediments: '',
      corner: '', 
      offside: '',
      goals: '',
      createdAt:'',
      createdAt : new Date
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('stats', null, {});
  }
};