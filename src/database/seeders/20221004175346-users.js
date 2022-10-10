'use strict';

const { v4: uuid } = require("uuid");

module.exports = {
  async up (queryInterface) {
    
    await queryInterface.bulkInsert('users', [{

      id: uuid(),
      name: 'Joao Pedro',
      email: 'teste@teste',
      password:'1234',
      birth_date: "1993-10-23",
      photograph: 'https://github.com/crisleyhguimaraes.png',
  }]);
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
