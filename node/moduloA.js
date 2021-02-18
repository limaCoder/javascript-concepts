console.log(this)

// formas de se exportar para fora do módulo, para se tornar acessível aos outros módulos
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'
console.log(this === exports && this === module.exports) // true, são a mesma coisa, e são objetos