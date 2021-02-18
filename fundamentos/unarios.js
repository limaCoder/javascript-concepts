let num1 = 1
let num2 = 2

//Operações Unárias
num1++ //PósFixado
console.log(num1)
--num2 //PréFixado. Há preferência nele pelo operador aparecer antes, logo ele é mais "apressado".
console.log(num2)

console.log(++num1 === num2--) // = true, dado que há preferência no num1 por ser préFixado, e o seu valor será 
// o mesmo que definido em num2, que ainda não recebeu a subtração por ser pósFixado. Evite-se usar incrementos em
// comparação como nesse exemplo, pois torna o código confuso, e deve-se sempre prezar pela simplicidade.
console.log(num1 === num2) // false, os valores são diferentes