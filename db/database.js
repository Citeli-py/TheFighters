const { Sequelize } = require('sequelize');

// Conexão com o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite', // O caminho onde o banco de dados será salvo
  logging: false,
});

module.exports = sequelize;
