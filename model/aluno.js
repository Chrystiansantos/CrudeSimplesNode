const Sequelize = require('sequelize');

const sequelize = new Sequelize('exMurilo', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('conectado com sucesso !');
}).catch(function(erro) {
    console.log('Falha a se conectar: ', erro)
});

const Aluno = sequelize.define('Alunos', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.NUMBER
    },
    telefone: {
        type: Sequelize.NUMBER
    },
    curso: {
        type: Sequelize.STRING
    }
})
module.exports = Aluno;