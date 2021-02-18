const porta = 3003

const express = require('express')
const app = express() // na varíavel 'app' iremos colocar nossos serviços
const bancoDeDados = require('./bancoDeDados')

/* app.get('/produtos', (req, res, next) => { // 'get' é uma forma de requisição, e estamos colocando como resposta para essa requisição uma função middleware nela
    res.send({ nome: 'Notebook', preco: 123.45 }) // converter para JSON
}) */

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //o request.params nada mais é do que a lista de parâmetros que estão na sua url
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
app.listen(porta, () => { // com o 'listen', informamos a porta que queremos ouvir a aplicação
    console.log(`Servidor está executando na porta ${porta}.`)
})

/* Se eu quero pegar informações sobre o usuário, eu devo passar uma requisição do tipo GET

Se eu quero salvar um usuário, eu devo passar uma requisição do tipo POST e devo passar os dados do usuário.

Se eu quero atualizar os dados de um usuário, eu devo passar uma requisição do tipo PUT e devo passar os dados do usuário

Se eu quero deletar um usuário,  devo passar uma requisição do tipo DELETE e alguma forma de identificar o usuário que 
vou deletar */

