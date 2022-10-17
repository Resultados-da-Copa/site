'use strict';

const { v4: uuid } = require("uuid");
const { team } = require('..')
const bcrypt = require('bcryptjs');

module.exports = {

  async up (queryInterface) {
    
    await queryInterface.bulkInsert('users', [{

      id: uuid(),
      name: 'teste',
      username: 'userteste',
      email: 'teste@teste.com',
      password: bcrypt.hashSync('teste'),
      birth_date: "1993-10-23",
      picture: 'avatar.png',
      team_id: await team.findOne({
        where: {
          name: 'brasil'
        }
      }).then(res => {
        return res.dataValues.id
      })
  }]);
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
