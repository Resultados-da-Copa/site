'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', [{
      name: 'Crisley',
      email: 'crisleyhguimaraes@gmail.com',
      password:'1234',
      dataNascimento: 23/10/1993,
      foto: 'https://github.com/crisleyhguimaraes.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};