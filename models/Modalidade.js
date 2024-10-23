const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database'); // Conexão com o banco de dados

class Modalidade extends Model {}

Modalidade.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor_mensalidade: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // Valor não pode ser negativo
    },
  },
  valor_matricula: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // Valor não pode ser negativo
    },
  },
}, {
  sequelize,
  modelName: 'Modalidade',
  tableName: 'modalidades', // Nome da tabela no banco de dados
  timestamps: false, // Se não quiser campos de createdAt e updatedAt
});

module.exports = Modalidade;
