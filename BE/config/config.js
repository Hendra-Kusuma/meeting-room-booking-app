require('dotenv').config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT,
  PORT_SERVER
} = process.env;

const commonConfig = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  dialect: DB_DIALECT,
};

module.exports = {
  PORT_SERVER,
  development: commonConfig,
  production: commonConfig
};
