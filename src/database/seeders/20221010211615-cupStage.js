'use strict';

const { BOOLEAN } = require("sequelize");
const { v4: uuid } = require("uuid");
const { championship } = require("../../database")

module.exports = {
  async up(queryInterface) {



    await queryInterface.bulkInsert('cup_stage', [{

      id: uuid(),
      cup_id: await championship.findOne({
        where: {
          name: 'copa do mundo'
        }
      }).then(result => {
        return result.dataValues.id
      }),
      name: 'Group Stage',
      initial_stage: true,
      finish_stage: false,
      stopped_stage: false,
      createdAt: new Date()
    }]);
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cup_stage', null, {});
  }
};
// group stage
// knockout stage