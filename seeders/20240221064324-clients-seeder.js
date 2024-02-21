'use strict';

const moment = require('moment');
require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const jakartaTime = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    await queryInterface.bulkInsert('clients', [
      {
        name: 'Eko Suprapto Wibowo',
        email: 'swdev.bali@gmail.com',
        phone: '086566252225',
        credit: 25,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Pery Merdeka',
        email: 'perry@gmail.com',
        phone: '08993654532',
        credit: 10,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Muhammad Faiz',
        email: 'faiz.oce@gmail.com',
        phone: '0834458855',
        credit: 18,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Sangsaka Wira',
        email: 'wira.com@gmail.com',
        phone: '08781444587',
        credit: 35,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Angga Dev RWID',
        email: 'angga247@gmail.com',
        phone: '08665145345',
        credit: 34,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
