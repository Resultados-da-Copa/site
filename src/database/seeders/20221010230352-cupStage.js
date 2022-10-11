'use strict';

const { BOOLEAN } = require("sequelize");
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    


    await queryInterface.bulkInsert('cupStage', [{

      id: uuid(),
      championshipID: '13870273-05e2-490a-b31b-295c58c46668',
      name: 'Knockout Stage',
      startedCupStage : true,
      finishedCupStage : false,
      createdAt : new Date
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cupStage', null, {});
  }
};
// group stage 
// knockout stage