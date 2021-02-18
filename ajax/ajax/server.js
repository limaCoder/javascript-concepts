const bodyParser = require('body-parser')
const express = require('express') // o express retorna uma função abaixo
//Iniciando o APP
const app = express()

app.use(express.static('.')) // O ponto indica que a pasta que deve ser servida estaticamente é a atual, corrente, 
// ou seja, arquivos dentro da pasta Ajax nesse caso.
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// app.get('/teste', (req, res) => res.send('Ok')) // criando rota
app.listen(8080, () => console.log('Executando...'))

// O Nodemon faz automaticamente a reinicialização do servidor quando há alguma alteração no código

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// NPM install Mongoose - ORM - Criando tabelas em objetos pelo Javascript

// Iniciando o DB
/*
const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
*/
