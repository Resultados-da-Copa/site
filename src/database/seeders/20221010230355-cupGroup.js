'use strict';

const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    


    await queryInterface.bulkInsert('cup_group', [{

      id: uuid(),
      cup_stage_id: '0b89d8a0-ff80-4f41-8ba2-b6be61ad3325',
      name: 'A',
      started_cup_stage : true,
      finished_cup_stage : false,
      createdAt : new Date()
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cup_group', null, {});
  }
};