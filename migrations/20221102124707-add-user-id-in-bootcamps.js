'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'iser_id' FK con users
    //addColumn: parametros:
    // 1.tabla en la cual poner la columna
    // 2.el nombre de la nueva columna
    //opciones de la nueva columna
    await queryInterface.addColumn('bootcamps',
                                  'user_id', 
                                  {
                                    type: Sequelize.INTEGER,
                                    references: {
                                      model: 'users',
                                      key: 'id'
                                    },
                                    onUpdate: 'CASCADE',
                                    onDelete: 'SET NULL'
                                  }
                                  )
  },

  async down (queryInterface, Sequelize) {
    //tabla de donde se va a eliminar
    await queryInterface.removeColumn('bootcamps' , 'user_id')
  }
};
