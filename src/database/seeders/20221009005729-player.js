'use strict';

const { v4: uuid } = require("uuid");

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
      const nationality = [qatar]
      const weight = [66.0, 1.8,]
      const number = [1, 2, ,3 , 4, 5, 6, 7, 8, 9, 10, 11]
      const height = [1.78, 1.8, ]
      const foot = [D, D, D, D, D, D, D, D, D, D, D]


      for(let i = 0; i < name.length; i++){
        await queryInterface.bulkInsert('player', [{
          id: uuid(),
          teamID: team.findOne ({
            where:{
              name:nationality[0]
            }
          }).then((result) => {
            return result.dataValues.id
        }),
          name: name[i],
          photograph: photograph[i],
          birth_date: birth_date[i],
          nationality: nationality[i],
          weight: weight[i],
          number: number[i],
          height: height[i],
          foot: foot[i],
          createdAt: new Date()
        }]);
      }
    },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('player', null, {});
  }
};
