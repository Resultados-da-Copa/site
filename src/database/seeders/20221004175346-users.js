'use strict';

const { v4: uuid } = require("uuid");
const bcrypt = require('bcryptjs');

module.exports = {

  async up (queryInterface) {
    
    await queryInterface.bulkInsert('users', [{

      id: uuid(),
      name: 'teste',
      email: 'teste@teste.com',
      password: bcrypt.hashSync('teste'),
      birth_date: "1993-10-23",
      photograph: 'avatar.png',
  }]);
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
