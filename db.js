const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_MYSQL);

module.exports = sequelize;
