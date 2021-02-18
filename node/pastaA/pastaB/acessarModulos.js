const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/* const saudacao = require('saudacao')
console.log(saudacao.ola) - acessando um módulo criado por você em Node Modules - não fazer isso, pois já existem as 
dependências para isso */

const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http') // nesse se usa o protocolo HTTP, que é baseado em requisição e resposta, então o 'req' é 
// um objeto que contém informações sobre a solicitação HTTP do evento, informações do header. Já o 'res' é basicamente 
// o objeto que contem a resposta do servidor.
// http.createServer((req, res) => {
//      res.write('Bom dia!')
//      res.end()
// }).listen(8080)