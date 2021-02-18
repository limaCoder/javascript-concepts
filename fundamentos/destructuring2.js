// Ao declarar um array ou objeto, as chaves ou colchetes ficam do lado direito.
// Ao usar o destructuring em um array ou objeto, as chaves ou colchetes ficam do lado esquerdo 

const [a] = [10] // criando uma constante a e atribuindo à essa constante o valor do array [10].
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [ /*here*/, [, nota]] = [[, 8, 8] /* <- esse array será o primeiro elemento do array*/, [9, 6, 8]]
console.log(nota) // nesse caso ele pegou a segunda posição do primeiro array e essa posição é um array novamente 
//e ai ele pegou novamente a segunda posição que nesse caso é o 6.

// Sem Destructuring:

// Array
const aprovados = ['Bia', 'Carlos', 'Ana']
const primeiro = aprovados[0]
const segundo = aprovados[1]
const terceiro = aprovados[2]
console.log(primeiro, segundo, terceiro)

// Objeto
const pessoa = { nome: 'Maria', idade: 11 }
const nome = pessoa.nome
const idade = pessoa.idade
console.log(nome, idade)

//Com Destructuring:

// Array
const aprovados = ['Bia', 'Carlos', 'Ana']
const [primeiro, segundo, terceiro] = aprovados
console.log(primeiro, segundo, terceiro)

// Objeto
const pessoa = { nome: 'Maria', idade: 11 }
const { nome, idade } = pessoa
console.log(nome, idade)