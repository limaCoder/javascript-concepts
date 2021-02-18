// Hoisting é um coportamento Javascript padrão de mover/içar declarações para o topo.
// Nunca se deve fazer isso, sempre deve-se declarar as variáveis primeiro.

console.log('a =', a)
var a = 2 // Var = Ocorre Hoisting
console.log('a =', a)

console.log('b =', b)
let b = 2 // Let = não ocorre Hoisting
console.log('b =', b)