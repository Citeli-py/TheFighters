const sequelize = require('../db/database');

const Pessoa = require('./Pessoa');
const Aluno = require('./Aluno');
const Modalidade = require('./Modalidade');

// Associações entre modelos
Pessoa.hasOne(Aluno, { constraint: true, foreignKey: 'id_pessoa' });

Aluno.belongsToMany(Modalidade, { through: 'AlunoModalidade' });
Modalidade.belongsToMany(Aluno, { through: 'AlunoModalidade' });

module.exports = {
  sequelize,
  Pessoa,
  Aluno,
  Modalidade
};