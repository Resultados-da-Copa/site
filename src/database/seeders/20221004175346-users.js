'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [{
<<<<<<< HEAD
      id: "dsfsfdfd",
      name: 'joao',
      email: 'crisleyhguimaraes@gmail.com',
      password:'1234',
      birth_date: "1993-10-23",
      photograph: 'https://github.com/crisleyhguimaraes.png',
=======
      name: 'Crisley',
      email: 'crisleyhguimaraes@gmail.com',
      password:'1234',
      birth_date: 23/10/1993,
      photograph: 'https://github.com/crisleyhguimaraes.png',
      createdAt: new Date(),
      updatedAt: new Date()
>>>>>>> main
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};