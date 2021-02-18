// pessoa -> 123(endereço de memória) -> {...} (objeto)
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } error

Object.freeze(pessoa) // tornando o objeto 'constante'

// 'Congelando o objeto, não é possível alterar/adicionar/deletar atributos
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'}) // criando o Object e já o tornando constante
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)