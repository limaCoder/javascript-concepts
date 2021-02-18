// Reduce é uma função do Array, nem o objeto e nem a String tem a função reduce.

const alunos = [
    { nome: 'Jõao', nota: 7.3, bolsista: false}, // acumulador = resultado
    { nome: 'Maria', nota: 9.2, bolsista: true}, // atual - bolsista
    { nome: 'Pedro', nota: 9.8, bolsista: false}, // acumulando
    { nome: 'Ana', nota: 8.7, bolsista: true} // acumulando
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado/*acumulador*/, bolsista/*atual*/) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

/// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

/* Formas Alternativas

let todosBolsistas = alunos.map(function(aluno){return aluno.bolsista}).reduce(function(anterior, atual){
    return anterior && atual
})
console.log(todosBolsistas)
// Desafio 2: Algum aluno é bolsista ?
let algumBolsista = alunos.map((aluno) => {return aluno.bolsista}).reduce((anterior, atual) => {
    return anterior || atual
})
console.log(algumBolsista)

*/