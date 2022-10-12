'use strict';

const { v4: uuid } = require("uuid");
const { team } = require('../../database')

module.exports = {
  async up(queryInterface) {

    const name = [
      "Saad Al Sheeb", "Yousof Hassanl", "Meshaal Barsham",
      "Salah Zakaria", "Ro-Ro", "Abdelkarim Hassan",
      "Boualem Khoukhi", "Salem Al Hajri", "M Khoder",
      "Almoez Ali", "Akram Afif", "Bassam Al Rawi", 
      "Musaab Khidir", "Ahmed Suhail", "Homam Ahmed", 
      "Mohamed Emad Ayash", "Jassem Gaber",
      "Abdulsallam", "Ahmed Fadel Hasaba", "Abdelaziz Hatim", 
      "Karim Boudiaf", "Moustafa Tarek", "Naif Al Hadhrami", 
      "Mohammed Muntari", "Muneer Ali", "Ahmed Alaa"
    ]

    const photograph = [
      'public/img/player/padrao.png']
    const birth_date = ["1993-10-23"]
    const nationality = ['qatar']
    const weight = [
      73, 82, 78, 68, 77, 87, 
      56, 68, 68, 78, 73, 76, 
      78, 75, 90, 56, 73, 71, 
      70, 78, 82, 87,84, 77, 
      90, 87
    ]
    const number = [
      1, 2, 3, 4, 
      5, 6, 7, 8, 
      9, 10, 11, 12, 
      13, 14, 15, 16,
      17, 18, 19, 20, 
      21, 22, 23, 24, 
      25, 26
    ]
    const height = [
      180, 183, 175, 180, 
      178, 18, 178, 187, 
      178, 18, 178, 183,
      191, 182, 168, 193,
      175, 163, 183, 180, 
      160, 182, 168, 193,
      178, 180
    ]
    const foot = [
      "E", "D", "D", "D", 
      "D", "E", "D", "D", 
      "D", "D", "E", "D",
      "D", "D", "D", "E",
      "D", "D", "E", "D",
      "D", "E", "D", "D",
      "E","D"
    ]


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
        foot: foot[i],
        createdAt: new Date()
      }]);
    }
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players', null, {});
  }
};