const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database'); // Conexão com o banco de dados

class Aluno extends Model {}

Aluno.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dia_pagamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 31,
    },
  },
}, {
  sequelize,
  modelName: 'Aluno',
  tableName: 'alunos', // Nome da tabela no banco de dados
  timestamps: false, // Se não quiser campos de createdAt e updatedAt
});

module.exports = Aluno;
