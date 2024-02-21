'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roomUsage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.rooms, { foreignKey: 'roomId', onDelete: 'CASCADE'})
      // this.belongsTo(models.clients, { foreignKey: 'clientId', onDelete: 'CASCADE'})
    }
  }
  roomUsage.init({
    clientId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    bookingDate: DataTypes.DATE,
    quotaUsed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roomusage',
  });
  return roomUsage;
};