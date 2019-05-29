const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const curso = require('./model/curso');
const aluno = require('./model/aluno');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Curso
app.post('/cursos', function(req, res) {
    if (req.body.nome !== '' && req.body.duracao !== '') {
        curso.create({
            nome: req.body.nome,
            duracao: req.body.duracao,
        }).then(function() {
            res.send("Dados salvos com sucesso !");
        }).catch(function(error) {
            res.send("Houve um erro: ", error)
        })
    } else {
        res.send("Por favor informe dados valido !")
    }
});

app.get('/cursos', function(req, res) {
    curso.findAll().then(function(cursos) {
        res.send({ cursos });
    }).catch(function(error) {
        console.log("Ocorreu um erro :", error);
    })
})
app.delete('/cursos', function(req, res) {
        curso.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.send("Dados deletados com sucesso !");
        }).catch((error) => {
            res.send(error);
        })
    })
    //ALUNO
app.post('/alunos', function(req, res) {
    if (req.body.nome !== '' && req.body.telefone !== '' && req.body.idade !== '' && curso !== '') {
        aluno.create({
            nome: req.body.nome,
            idade: req.body.idade,
            telefone: req.body.telefone,
            curso: req.body.curso
        }).then(function() {
            res.send("Dados salvos com sucesso !");
        }).catch(function(error) {
            res.send("Houve um erro: ", error)
        })
    } else {
        res.send("Por favor informe dados valido !")
    }
});

app.get('/alunos', function(req, res) {
    alunos.findAll().then(function(alunos) {
        res.send({ alunos });
    }).catch(function(error) {
        console.log("Ocorreu um erro :", error);
    })
})
app.delete('/alunos', function(req, res) {
    aluno.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.send("Dados deletados com sucesso !");
    }).catch((error) => {
        res.send(error);
    })
})


//SERVIDOR
app.get('/', (req, res) => {
    res.send('Servidor online !')
})
app.listen(8080, function() {
    console.log(`Servidor rodando na url http://localhost:8080`)
});