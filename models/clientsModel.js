const { DataTypes } = require("sequelize");
const sequelize = require("../configDB");

// Model untuk tabel Clients
const clients = sequelize.define(
    "clients",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "clients",
      timestamps: true,
    }
  );


module.exports = clients;