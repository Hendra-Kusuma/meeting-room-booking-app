const Clients = require("./index");
const Rooms = require("./index");



'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roomusage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roomusage.belongsTo(models.clients, { foreignKey: 'clientId', as: 'clientsName' });
      roomusage.belongsTo(models.rooms, { foreignKey: 'roomId', as: 'roomsName' });
    }
  }
  roomusage.init({
    clientId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    bookingDate: DataTypes.DATE,
    quotaUsed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roomusages',
  });
  return roomusage;
};