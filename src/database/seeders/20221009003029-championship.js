'use strict';

const { BOOLEAN } = require("sequelize");
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('championship', [{

      id: uuid(),
      name : "copa do mundo",
      startedChampionship : true,
      finishedChampionship : false,
      stoppedChampionship : false,
      createdAt : new Date
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('championship', null, {});
  }
};
