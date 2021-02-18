const escola = 'Cod3r' // declaração de string

console.log(escola.charAt(4)) //charAt mostra o caractere na posição do índice 4 na string Cod3r = r (começa por 0)
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Mostra a posição do caractere que está no índice 3 na tabela ASCII
console.log(escola.indexOf('r')) // mostra em qual índice está posicionado o caractere

console.log(escola.substring(1)) // Substring encurta a string e mostra os caracteres determinados a partir de uma
// posição (nesse caso na posição 1)

console.log(escola.substring(0, 3)) // o primeiro número serve para indicar o índice por onde começar e o 
// segundo a quantidade de caracteres que serão exibidos

console.log('Escola '.concat(escola).concat("!")) // Aqui é feito a concatenação de strings, de várias formas
console.log('Escola ' + escola + "!") // concatenação feita com o operador de soma
console.log(escola.replace(3, 'e')) // Aqui há a substituição do caractere que está no índice informado pela
// letra desejada

console.log(escola.replace(/\w/g, 'e')) // Regex para substituir todos os dígitos (números) por um outro desejado ('e')
console.log(escola.replace(/\w/g, 'e')) // Regex para substituir todos os caracteres por um outro desejado ('e')

console.log('Ana,Maria, Pedro'.split(',')) // conversão de string para array // split usa-se de um separador
// dos elementos de um Array