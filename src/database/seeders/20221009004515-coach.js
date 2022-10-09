'use strict';

const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
  
    const teamID = [
      'alemanha', 'frança', 'brasil',
      'inglaterra', 'holanda', 'qatar',
      'portugal', 'arabia', 'suica',
      'espanha'
    ]
    const name = [      
      'Hansi Flick', 'Didier Deschamps', 'Tite',
      'Gareth Southgate', 'Louis van Gall', 'Felix Sanchez',
      'Fernando Santos', 'Herve Renard', 'Murat Yakin',
      'Luis Enrique'
    ]

    for(let i = 0; i < name.length; i++){
      await queryInterface.bulkInsert('coach', [{
        id: uuid(),
        name: name[i],
        teamID: teamID[i],
      }]);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('coach', null, {});
  }
};
