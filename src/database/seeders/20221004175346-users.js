'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [{
      id: "dsfsfdfd",
      name: 'joao',
      email: 'crisleyhguimaraes@gmail.com',
      password:'1234',
      birth_date: "1993-10-23",
      photograph: 'https://github.com/crisleyhguimaraes.png',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};