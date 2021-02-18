// Quando se realiza uma comparação usando um operador relacional, o resultado sempre será verdadeiro ou falso.

console.log('01)', '1' == 1) // por ser uma linguagem fracamente tipada, usando '==' para comparação, será comparado
// apenas o valor e não o tipo. Ou seja, aqui o resultado = true.  
console.log('02)', '1' === 1) // essa comparação '===' chama-se 'comparação estritamente igual', e aqui compara-se
// não somente os valores, como também os tipos. Aqui, o primeiro valor é do tipo string, e o segundo do tipo number,
// logo o resultado = false. O estritamente igual é o recomendado a se usar.
console.log('03)', '3' != 3) //não estritamente igual, logo 3 não é diferente de '3', resultado = false
console.log('04)', '3' !== 3)// estritamente igual, logo 3 é diferente de '3', resultado = true.

console.log('05)', 3 < 2) //false
console.log('06)', 3 > 2) //true
console.log('07)', 3 <= 2) //false
console.log('08)', 3 >= 2) //true   

const d1 = new Date(0) // '0' significa a data de refêrencia em Javascript, que é 1 de Janeiro de 1970. O Marco Zero.
const d2 = new Date(0) // Date é uma função, o professor instanciou com new, tornando-a um objeto, podendo armazenar
// um valor distino dentro dos parênteses, já que ao usar somente 'Date()' irá retornar a data atual.

// Como os dois exemplos abaixo são comparações de variáveis, que apontam para endereços de memórias diferentes,
//e um endereço de memória de uma variável é único e não pode ser repetido jamais, é como se fosse o CPF de uma 
//pessoa!, logo o resultado = false
console.log('09)', d1 == d2)
console.log('10)', d1 === d2)
//
console.log('11)', d1.getTime() === d2.getTime()) // com a função 'getTime' o método passa a retornar valores 
// e não endereços de memoria, sendo assim a comparação é válida, e se detiver os mesmo valores irá retornar
// true. 

console.log('12)', undefined == null) //true
console.log('13)', undefined === null) //false