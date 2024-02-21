'use strict';
const moment = require('moment');
require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const jakartaTime = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    await queryInterface.bulkInsert('roomusages', [
      {
        clientId: '1',
        roomId: '2',
        startTime : '12.30',
        endTime: '11.30',
        bookingDate:'2024-02-27',
        quotaUsed: 3,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        clientId: '3',
        roomId: '1',
        startTime : '12.30',
        endTime: '11.30',
        bookingDate:'2024-03-10',
        quotaUsed: 5,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        clientId: '4',
        roomId: '1',
        startTime : '12.30',
        endTime: '11.30',
        bookingDate:'2024-02-22',
        quotaUsed: 4,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        clientId: '5',
        roomId: '3',
        startTime : '12.30',
        endTime: '11.30',
        bookingDate:'2024-03-15',
        quotaUsed: 2,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roomusages', null, {});
  }
};
