let a = 123

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c) // O this só é igual ao objeto global quando estiver dentro de uma função, podendo ainda 
// variar dependendo de quem o chame.
// O " this" é estritamente igual (===) ao "window" (browser, web), da mesma forma em que o "this" é 
// estritamente igual ao module.exports (Node).

//para tornar uma variável global no projeto inteiro é necessária colocá-la no module.exports
console.log(module.exports.c)
console.log(module.exports === true)
console.log(module.exports) // o module.exports é igual ao this no contexto do Node, quando se tá diretamente num 
// arquivo (ou seja, não dentro de alguma função).

// criando uma variável maluca: sem var, const e let!
abc = 3 // não faça isso em casa!!! // é o equivalente a global.abc = 3 
// ^ também é parecido com o 'var'. A maior diferença é que sem utilizar o var você precisa atribuir um valor
// por obrigação no momento da criação da variável. Tirando isso, ela funciona praticamente da mesma forma que 
//uma var.
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }