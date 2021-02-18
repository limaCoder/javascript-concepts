// novo recurso do ES2015
/* Destructuring é um operador de desestruturação, ou seja, ele tira da estrutura alguma coisa. Uma 
estrutura pode ser um objeto ou array. Então, você extrai do objeto algum atributo, ou algum elemento do 
array */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
    },
}

const { nome, idade } = pessoa // tire de dentro do objeto os atributos 'nome' e 'idade' do objeto 'pessoa'
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // renomeando a varíavel de forma dinâmica
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // destructuring de um bloco dentro de outro bloco

const { conta: { ag, nm } } = pessoa
console.log(ag, nm) // erro
