'use strict';

const { v4: uuid } = require("uuid");
const { team } = require('../../database')

module.exports = {
  async up(queryInterface) {

    const name = [
      "Saad Al Sheeb", "Yousof Hassanl", "Meshaal Barsham",
      "Salah Zakaria", "Ro-Ro", "Abdelkarim Hassan",
      "Boualem Khoukhi", "Salem Al Hajri", "M Khoder",
      "Almoez Ali", "Akram Afif"]

    const photograph = [
      'public/img/player/padrao.png']
    const birth_date = ["1993-10-23"]
    const nationality = ['qatar']
    const weight = [6, 1, 6, 3, 5, 6, 4, 6, 8, 6, 9]
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const height = [178, 18, 178, 18, 178, 18, 178, 18, 178, 18, 178]
    const foot = ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D']


    for (let i = 0; i < name.length; i++) {
      await queryInterface.bulkInsert('players', [{
        id: uuid(),
        team_id: await team.findOne({
          where: {
            name: nationality[0]
          }
        }).then((result) => {
          return result.dataValues.id
        }),
        name: name[i],
        photograph: photograph[0],
        birth_date: birth_date[0],
        nationality: nationality[0],
        weight: weight[i],
        number: number[i],
        height: height[i],
        foot: foot[i]
      }]);
    }
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players', null, {});
  }
};
