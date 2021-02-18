// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => { // o método 'on' ele intercepta uma requisição, pra executar uma ação em cima dela. O 
        // método on captura o evento indicado quando ele é disparado (no caso 'data'). Após esse evento ser capturado, a 
        // função callback é chamada, passando pra ela o objeto que representa o evento (no caso dados). 
            resultado += dados
        })

        res.on('end', () => { // terminando de chegar os dados
            callback(JSON.parse(resultado)) // converter o JSON para objeto
        })
    })
}

// Callbacks Aninhadas
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})