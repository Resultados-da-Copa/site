'use strict';

const { team } = require('../../database');
const { v4: uuid } = require('uuid');

module.exports = {

  async up(queryInterface) {
    const teamID = [
      'brasil', 'qatar'
    ]
    const name = [
      'Tite', 'Murat Yakin'
    ]

    for (let i = 0; i < name.length; i++) {
      await queryInterface.bulkInsert('coach', [{
        id: uuid(),
        name: name[i],
        team_id: await team.findOne({
          where: {
            name: teamID[i]
          }
        }).then((result) => {
          return result.dataValues.id
        })
      }]);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('coach', null, {});
  }
};
