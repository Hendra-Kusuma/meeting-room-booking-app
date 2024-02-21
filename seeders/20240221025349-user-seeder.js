'use strict';
const moment = require('moment');
require('moment-timezone');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const jakartaTime = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    await queryInterface.bulkInsert('users', [
      {
        name: 'Hendra Kusuma',
        email: 'hendrakusuma.vegas@gmail.com',
        phone: '08990994899',
        password: await bcrypt.hash('123456', 10),
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Lisna Maria',
        email: 'naia.mumu@gmail.com',
        phone: '089935135643',
        password: await bcrypt.hash('123456', 10),
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Sayyid Muhammad Lathief',
        email: 'Lathief@gmail.com',
        phone: '08361356165',
        password: await bcrypt.hash('123456', 10),
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Raihan Zian Mauza',
        email: 'hello.world@gmail.com',
        phone: '087814654351',
        password: await bcrypt.hash('123456', 10),
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        name: 'Asyura Lathisya Humaira',
        email: 'dede.cantik@gmail.com',
        phone: '0868465435435',
        password: await bcrypt.hash('123456', 10),
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
