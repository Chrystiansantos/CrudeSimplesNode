const Sequelize = require('sequelize');

//aqui ele executa a conexao
const sequelize = new Sequelize('exMurilo', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});

//essa funçao verifica se foi conectado com sucesso ao bd
sequelize.authenticate().then(function() {
    console.log('conectado com sucesso !');
}).catch(function(erro) {
    console.log('Falha a se conectar: ', erro)
});

//aqui irei criar a tabela
//sequelize.define('nome da tabela', {campos da tabela})
const Cursos = sequelize.define('Cursos', {
    //campo titulo
    nome: {
        type: Sequelize.STRING
    },
    duracao: {
        type: Sequelize.STRING,
    }
});
module.exports = Cursos;