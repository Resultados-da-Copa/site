'use strict';

const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface) {
    const name = [
      'alemanha', 'arabia saudita', 'argentina',
      'australia', 'belgica', 'brasil',
      'camaroes', 'canada', 'qatar',
      'coreia do sul', 'costa rica',
      'croacia', 'dinamarca', 'equador',
      'espanha', 'estados unidos', 'franca',
      'gana', 'holanda', 'inglaterra',
      'ira', 'japao', 'marrocos',
      'mexico', 'pais de gales',
      'polonia', 'portugal', 'senegal',
      'servia', 'suica', 'tunisia',
      'uruguai'
    ]
    const abbreviation = [
      'ale', 'sau', 'arg',
      'aus', 'bel', 'bra',
      'cam', 'can', 'qat',
      'cds', 'cos','cro', 
      'din', 'equ','esp',
      'eua', 'fra','gan',
      'hol', 'ing','ian',
      'jap', 'mar', 'mex',
      'gal', 'pol', 'por',
      'sen', 'ser',  'sui',
      'tun', 'uru'
    ]
    const flag = [
      'public/img/flag/alemanha.png', 'public/img/flag/arabia.png', 'public/img/flag/argentina.png',
      'public/img/flag/australia.png', 'public/img/flag/belgica.png', 'public/img/flag/brazil.png',
      'public/img/flag/camaroes.png', 'public/img/flag/canada.png', 'public/img/flag/qatar.png',
      'public/img/flag/coreia.png', 'public/img/flag/costarica.png','croacia', 
      'public/img/flag/dinhamarca.png', 'equador','public/img/flag/espanha.png',
      'public/img/flag/eua.png', 'public/img/flag/franca.png','public/img/flag/gana.png',
      'public/img/flag/holanda.png', 'public/img/flag/inglaterra.png','public/img/flag/ira.png',
      'public/img/flag/japao.png', 'public/img/flag/marrocos.png', 'mexico',
      'public/img/flag/paisgales.png', 'public/img/flag/polonia.png', 'public/img/flag/portugal.png',
      'public/img/flag/senegal.png', 'public/img/flag/servia.png',  'public/img/flag/suica.png',
      'public/img/flag/tunisia.png', 'public/img/flag/uruguai.png'
    ]

    for(let i = 0; i < name.length; i++){
      await queryInterface.bulkInsert('team', [{
        id: uuid(),
        name: name[i],
        abbreviation: abbreviation[i],
        flag: flag[i],
        createdAt: new Date()
      }]);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('team', null, {});
  }
};
