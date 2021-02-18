// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável (arrow function traz uma sintaxe mais reduzida)
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// retorno implícito de uma função com um único parâmetro
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

// Todas abaixo produzem o mesmo resultado! Apenas a Arrow Function contém algumas particularidades

function hello() {
    console.log("Hello World");
}

const hello = function () {
    console.log("Hello World");
}

const hello = () => {
    console.log("Hello  World");
}
