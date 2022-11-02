'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('reviews', [{
       tittle: 'PHP AVANZADO',
       text: 'Bueno curso',
       rating: '573172632842',
       user_id: 1,
       bootcamp_id: 1
     },
     {
      tittle: 'El curso de Spring',
      text: 'Muy bueno',
      rating: '573172632842',
      user_id: 2,
       bootcamp_id: 2
    },
    {
      tittle: 'Opinión de c#',
      text: 'Mejorable',
      rating: '573172345345',
      user_id: 3,
       bootcamp_id: 3
    },
    {
      tittle: 'Opinión de Spring#',
      text: 'Bien',
      rating: '3462736432',
      user_id: 4,
       bootcamp_id: 4
    }
   ], {});
 },

 async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('reviews', null, {});

 }

};