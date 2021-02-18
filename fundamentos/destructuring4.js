// Exemplo bem semelhante ao da aula 'Destructuring3.js', com a diferença da troca de uso do objeto pelo 
// array.

function rand([min = 0, max = 1000] = []) {
    if (min > max) [min, max] = [max, min] // trocando o valor do minímo pelo máximo, caso o min seja maior que o max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // O valor vai variar entre 50 e 40
console.log(rand([992])) // O valor vai variar entre 992 e 1000
console.log(rand([, 10])) // O valor vai variar entre 1 e 10
console.log(rand([])) // varia entre os valores padrão 1 e 1000
console.log(rand()) // -> na versão 2015, dava erro por tentar desestruturar algo que está undefined ou null, mas
//a partir da versão 2017, ao fazer o destructuring no parâmetro da função e colocar = [] (array vazio),
//irá funcionar.