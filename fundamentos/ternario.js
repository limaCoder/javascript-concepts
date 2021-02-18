//Forma mais simples e reduzida de realizar uma condição (if/else). Também pode ser chamado de 'operador condicional'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Resultado'
//Explicando a linha de código acima:
/* nota >= 7  = uma expressão relacional que irá retornar um valor verdadeiro ('aprovado') ou (:) falso ('reprovado')
atráves do operador ternário '?' */ 
//const valor = condicao ? valor1 : valor2

console.log(resultado(7.1)) //Aprovado
console.log(resultado(6.7)) //Resultado