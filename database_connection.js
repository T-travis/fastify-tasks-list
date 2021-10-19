const fp = require('fastify-plugin');
const { Sequelize } = require('sequelize');
const config = require("dotenv").config();
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_TYPE } = config.parsed;


async function databaseConnection(fastify, options, done) {

  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_TYPE,
  });

  try {
    await sequelize.authenticate();
    // inject postgres connection to Fastify instance
    fastify.decorate('pg', sequelize);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  Task.sync({ alter: true }); // TODO: not recommended for prod, look into migrations

  done();
}

module.exports = fp(databaseConnection);