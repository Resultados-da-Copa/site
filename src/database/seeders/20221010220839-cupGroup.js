'use strict';

const { v4: uuid } = require("uuid");
const { cup_stage } = require('../../database')

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('cup_group', [{

      id: uuid(),
      cup_stage_id: await cup_stage.findOne({
        where: {
          name: 'Group Stage'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      name: 'a',
      started_cup_stage: true,
      finished_cup_stage: false,
      createdAt: new Date()
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cup_group', null, {});
  }
};