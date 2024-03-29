'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rooms.hasMany(models.roomusages, { foreignKey: 'roomId', as: 'roomsName' });
    }
  }
  rooms.init({
    roomName: DataTypes.STRING,
    costPerHour: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rooms',
  });
  return rooms;
};