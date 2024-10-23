const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/database'); // Supondo que você já configurou seu arquivo de conexão ao Sequelize

class Pessoa extends Model {}

Pessoa.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Garantir que o CPF seja único
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Validação de e-mail
    },
  },
  data_ingresso: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_nasc: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nome_responsavel: {
    type: DataTypes.STRING,
    allowNull: true, // Pode ser null caso a pessoa não tenha um responsável
  },
  telefone_responsavel: {
    type: DataTypes.STRING,
    allowNull: true, // Pode ser null caso a pessoa não tenha um responsável
  },
  foto: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
}, {
  sequelize, // Conexão com o Sequelize
  modelName: 'Pessoa', // Nome do modelo
  tableName: 'pessoas', // Nome da tabela no banco de dados (se desejar um nome específico)
  timestamps: false, // Se você não quiser campos de createdAt e updatedAt
});

module.exports = Pessoa;
