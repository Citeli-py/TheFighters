const { sequelize, Pessoa, Aluno, Modalidade } = require('../models');

(async () => {
  
  const alunos = await Aluno.findAll({include: Modalidade});

  alunos.forEach(async (aluno) => {
    const nome = (await Pessoa.findByPk(aluno.id_pessoa)).nome
    console.log(nome, ": ");

    aluno.Modalidades.forEach(modalidade => {
      console.log("\t", modalidade.nome)
    });
  })
  

})();
