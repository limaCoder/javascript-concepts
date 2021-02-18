// Os identificadores podem começar com letra, $ ou _
// Não podem começar com números
// No Javascript, é possível usar acentos e símbolos
// Não podem conter espaços
// Não podem ser palavras reservadas

var e /*identificador*/ = 4
var $e = 4
var _e = 4

var a = 3
let b = 4

var a = 30
b = 40
// var a (identificador = nome dado a variável/constante) = 3 (atribuição)
//recomendado o uso do Let, implementado no ECMAScript 6, é um var melhorado. No caso acima, vemos que o var pode
// falhar ao permitir se redeclarar.
// var/let varia
// const constanteia

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50
console.log(c)