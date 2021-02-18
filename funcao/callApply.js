function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // chamando a função diretamente
console.log(produto.getPreco()) // chamando a função a partir do objeto. Vai usar o objeto como contexto/this para
// ser resolvido na função

const carro = { preco: 49990, desc: 0.20}

// Call e Apply são duas formas adicionais de se chamar uma função
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// A diferença entre os dois está na passagem de parâmetros. Com o call passando direto e o Apply tendo o uso de
// conchetes
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

// Call x Apply

// Há momentos que é melhor utilizzar um a outro. Quando você quiser parametrizar os argumentos que são passados 
// para uma função, ou seja, não sabe, por exemplo, a quantidade de argumentos que será passado pra ela, basta usar 
// o apply, já que os argumentos serão elementos de um array que não tem tamanho predefinido. Diferentemente de call, 
// no qual você precisa listar explicitamente no código os argumentos.

//Por exemplo:

//funcao.apply(thisDesejado, arrayDeArgumentos)
//funcao.call(thisDesejado, arg1, arg2, ...)

// Call e apply chamam a função, enquanto bind muda o contexto.