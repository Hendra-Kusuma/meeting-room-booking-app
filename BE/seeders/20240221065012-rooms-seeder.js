'use strict';
const moment = require('moment');
require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const jakartaTime = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    await queryInterface.bulkInsert('rooms', [
      {
        roomName: 'Conference Room',
        costPerHour: 5,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        roomName: 'Discussion Room',
        costPerHour: 9,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
      {
        roomName: 'Event Space',
        costPerHour: 8,
        createdAt: jakartaTime,
        updatedAt: jakartaTime
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rooms', null, {});
  }
};
