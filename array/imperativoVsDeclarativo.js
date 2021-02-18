const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

// Imperativo - Está muito mais preocupado de como é feito, o passo a passo, tendo muito controle. A suavantagem é o 
// desempenho, pois, em algumas situações, as linguagens imperativas têm um desempenho superior.
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1+= alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo = - Está muito mais preocupado com quê está sendo feito. Ele é mais interessante por promover o reuso
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// Arrow functions tem return implícito