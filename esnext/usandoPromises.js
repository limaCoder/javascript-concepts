// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Promise.all = quando todas as promessas forem resolvidas ou rejeitadas, execute os 'then' e 'catch' abaixo    
    // "Espera a requisição acabar e depois(then) que ela acabar realiza essas operações que estão aqui dentro desse bloco" 
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // tratamento de erro

getTurma('D').catch(e => console.log(e.message))

/* O método then() é utilizado em uma promise. Você pode passar duas funções callbacks como parâmetros. Quando a promise 
é resolvida, then executa uma das duas funções. A primeira é executada quando a promise é resolvida com sucesso, a 
segunda quando a promise é rejeitada. Imagine que a função p abaixo retorna uma promise, por exemplo:

p()
    .then(quandoPromiseCumprida, quandoPromiseRejeitada)
then também retorna uma promise, logo é possível encadear vários then.

Também é muito comum usar o catch em vez desse segundo parâmetro no then. Por exemplo:

p()
  .then(quandoPromiseCumprida)
  .catch(quandoPromiseRejeitada)
 */



// Promise com Axios

/* O Promise.All retorna um array com todas as respostas, ou seja, para acessar o data da primeira requisição você deve 
adicionar o indice, veja: 



const axios = require('axios')
 
const url =  'http://files.cod3r.com.br/curso-js/turmaA.json'
const url1 = 'http://files.cod3r.com.br/curso-js/turmaB.json'
const url2 = 'http://files.cod3r.com.br/curso-js/turmaC.json'
 
Promise.all([axios.get(url), axios.get(url1), axios.get(url2)]).then(resp => {
    console.log(resp[0].data);
}) */



/* O método on é um listener de eventos! Ou seja, ele fica a espera de um determinado evento, quando acontecer, executa uma 
determinada ação! No caso recebemos os dados em pequenos pedaços e no final temos o dado completo então nesse momento 
que entra o evento 'Data' e o evento 'End'.

O 'Data' é responsável por notificar a chagada de um novo pedaço do dado! Exemplo: Quando fazemos uma requisição para 
pegar os dados de um usuário. Esses dados dessa requisição ou stream de dados vem em pedacinhos que chamamos de chunk 
e o evento 'data' é responsável por nos notificar toda vez que um chunk novo chega.

O 'End' é responsável por nos notificar que não virá mais nenhum chunk, ou seja, terminamos de receber todos os dados 
daquele usuário! */


/* Quando houver opção de escolher entre callback e promises, é preferível utilizar promises. Isso porque a sintaxe é mais 
enxuta e é uma abordagem mais moderna. Porém, há momentos em que é preferível utilizar callback mesmo, por exemplo, 
quando você tem funções que esperam uma função callback, no caso de forEach, map, reduce... Nesse caso, o intuito é 
somente ter uma função que será chamada por outra, não um assincronismo propriamente dito. */