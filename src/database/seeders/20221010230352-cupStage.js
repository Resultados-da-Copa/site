'use strict';

const { BOOLEAN } = require("sequelize");
const {championship} = require('../../database')
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('cup_stage', [{

      id: uuid(),
      cup_id: await championship.findOne({
        where: {
          name: 'copa do mundo'
        }
      }).then(result => {
        return result.validValues.id
      }),
      name: 'Knockout Stage',
      startedCupStage : true,
      finishedCupStage : false,
      createdAt : new Date()
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cup_stage', null, {});
  }
};
// group stage 
// knockout stage