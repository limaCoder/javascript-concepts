const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) /*exibir os valores dos índices 
especificados do array*/
console.log(valores[4]) /*Em linguagens como Java, pedir para exibir um valor
de um índice que ainda não foi atríbuido gera erro, mas no Javascript o
valor é exibido como "undefined"*/

valores[4] = 10 //Atribuindo um valor ao índice 4 do Array
console.log(valores) //exibindo todos os valores do array
console.log(valores.length) //exibindo o número de valores dentro do Array

valores.push({id: 3}, false, null, 'teste') /*atribuindo um objeto, um dado
booleano, um valor nulo e uma string ao array*/
console.log(valores) //exibindo todos os valores do array

console.log(valores.pop()) //Comando que retira o último valor de seu Array
delete valores[0] /*Forma alternativa de excluir um valor do array,
especificando o índice onde o valor foi atríbuido.*/
console.log(valores) //exibindo todos os valores do array

console.log(typeof valores) //Do tipo Object

/* Extra: Array em Javascript é um tipo de dado dinâmico, ele cresce
e diminui a partir de quando você exclui elementos e seleciona novos
elementos, é uma estrutura indexada e heterogênea, onde você pode misturar
dados, embora não seja o recomendado, já que o ideal é ter arrays de tipos
de dados homogêneos */