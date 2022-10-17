'use strict';

const { v4: uuid } = require("uuid");
const { cup_group } = require('../../database')

module.exports = {
  async up(queryInterface) {
    const name = [
      'brasil', 'qatar'
    ]
    const abbreviation = [
      'bra', 'qat'
    ]
    const flag = [
      'flags/brazil.png', 'flags/qatar.png'
    ]

    for (let i = 0; i < name.length; i++) {
      await queryInterface.bulkInsert('team', [{
        id: uuid(),
        name: name[i],
        abbreviation: abbreviation[i],
        flag: flag[i],
        group: await cup_group.findOne({
          where: {
            name: 'a'
          }
        }).then(result => {
          return result.dataValues.id
        }),
        createdAt: new Date()
      }]);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('team', null, {});
  }
};
