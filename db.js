const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_MYSQL, {
  dialect: 'mysql'
});

module.exports = sequelize;
