// Array é uma estrutura indexada e dinâmica
// Array é um Object em Javascript

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // criando um Array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8 === undefined])

console.log(aprovados)
aprovados.sort() // altera o array, ordenando os elementos, seja alfabeticamente ou numericamente
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) // retorna undefined
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//aprovados.splice(1, 1) // o 'splice' é um método que deleta || adiciona || deleta e adiciona elementos ao Array
console.log(aprovados)
//aprovados.splice(1, 2) // o segundo param determina a quantidade de elementos que serão deletados, se maior do que 1
// irá deletar os elementos posteriores ao indicado, nesse caso, deleta Carlos e Ana. se for 0, nenhum elemento será
// deletado.
console.log(aprovados)
//aprovados.splice(1, 2, '1', '2') // os params posteriores ao 2 param são para adicionar novos elementos.
console.log(aprovados)
aprovados.splice(1, 0, '1', '2') // dessa forma, com o '0' no 2 param, nenhum elemento será deletado, e os adicionados
// irão se juntar aos elementos posteriores ao indíce especificado no 1 param 
console.log(aprovados)