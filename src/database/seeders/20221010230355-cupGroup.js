'use strict';

const { BOOLEAN } = require("sequelize");
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    


    await queryInterface.bulkInsert('cupGroup', [{

      id: uuid(),
      championshipID: '13870273-05e2-490a-b31b-295c58c46668',
      name: 'A',
      cupGroupId:'',
      startedCupStage : true,
      finishedCupStage : false,
      createdAt : new Date
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cupGroup', null, {});
  }
};