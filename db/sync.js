const { sequelize, Pessoa, Aluno, Modalidade } = require('../models');

async function testValues(){
  // Criação de dados de exemplo
  const pessoa = await Pessoa.create({
    nome: "matheus",
    cpf: '10100101010',
    telefone: "123123123",
    email: "asdad@asdas.com",
    rg: "rg",
    data_ingresso: "10/10",
    data_nasc: "2001-12-30"
  });

  const aluno = await Aluno.create({
    dia_pagamento: 10,
    id_pessoa: pessoa.id
  });

  
  const pessoa1 = await Pessoa.create({
    nome: "juca",
    cpf: '10101010',
    telefone: "123121233123",
    email: "asasdaddad@asdas.com",
    rg: "rg2",
    data_ingresso: "10/10",
    data_nasc: "2001-12-30"
  });
  
  const aluno1 = await Aluno.create({
    dia_pagamento: 12,
    id_pessoa: pessoa1.id
  });

  const modalidade = await Modalidade.create({
    nome: "Taekwondo",
    valor_mensalidade: 100,
    valor_matricula: 100
  });

  const modalidade2 = await Modalidade.create({
    nome: "Hapkido",
    valor_mensalidade: 120,
    valor_matricula: 100
  });


  // Relacionamento entre aluno e modalidade
  await aluno.addModalidade(modalidade);
  await aluno1.addModalidade(modalidade);
  await aluno1.addModalidade(modalidade2);
}


sequelize.sync({ force: true }).then(async () => {
  console.log('Tabelas criadas com sucesso!');

  await testValues();

  process.exit();
}).catch((error) => {
  console.error('Erro ao criar tabelas:', error);
});
