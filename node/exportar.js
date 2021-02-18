console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3 // usar o module.exports para exportar

exports = null // mesmo setando o valor nulo, ele continua com seus valores anteriores
console.log(module.exports)

exports = { // não exporta
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }