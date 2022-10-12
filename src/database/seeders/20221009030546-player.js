'use strict';

const { v4: uuid } = require("uuid");
const { team } = require('../../database')

module.exports = {
  async up(queryInterface) {

    const name = [
      "Alisson", "Ederson", "Weverton",
      "Danilo", "Bremer", "Eder Militao",
      "Ibanez", "Marquinhos", "Thiago Silva",
      "Alex Sandro", "Alex Telles", "Bruno Guimaraes", 
      "Casemiro", "Fabinho", "Fred", 
      "Everton Ribeiro", "Lucas Paqueta",
      "Antony", "Neymar", "Matheus Cunha", 
      "Pedro", "Raphinha", "Richarlison", 
      "Firmino", "Rodrygo", "Vinicius Junior"
    ]

    const photograph = [
      'public/img/player/padrao.png']
    const birth_date = ["1958-10-01"]
    const nationality = ['brasil']
    const weight = [
      70, 78, 82, 87,84, 77, 
      78, 75, 90, 56, 73, 71,
      90, 87, 73, 82, 78, 68, 
      77, 87, 56, 68, 68, 78, 
      73, 76
    ]
    const number = [
      1, 12, 22, 23, 
      14, 4, 13, 3, 
      5, 30, 18, 19, 
      6, 14, 2, 16,
      8, 17, 10, 25, 
      19, 7, 9, 13, 
      19, 7
    ]
    const height = [
      178, 180, 191, 182,       
      178, 18, 178, 187, 
      180, 183, 175, 180,
      178, 18, 178, 183,      
      168, 193, 175, 163, 
      183, 180, 160, 182, 
      168, 193,
      
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
