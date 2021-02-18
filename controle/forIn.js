// 'For In' é utilizado para percorrer os elementos de um array ou atributos de um object

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // aqui, com array, não é tão interessante seu uso
    console.log(i, notas[i]) // a variável 'i' é contador. o laço for a variável declarada com "let" é usada como 
    //controlador do índice que o for está percorrendo naquele momento, o in relaciona esse índice com o array.
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) { // já aqui, com object, é interessante de usar
    console.log(`${atributo} = ${pessoa[atributo]}`)
    // console.log(`${atributo} //chaves/identificadores do objeto = ${pessoa[atributo]} // atributos associadas a pessoa`)
}