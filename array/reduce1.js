const alunos = [
    { nome: 'Jõao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// com o map, estamos transformando 'alunos' em 'nota'
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { // params auto-explicativos
    console.log(acumulador, atual) // Mostrando o passo a passo da acumulação
    return acumulador + atual
}, 0)
// O reduce() serve para você reduzir um array para um só valor, tipo quando você tem um array cheio de valores e quer a 
// soma deles, como no exemplo acima.
console.log(resultado)

//Todas as funções  map, filter e reduce preservam o array original, nenhuma delas altera o array original, agora caso 
// esteja se referindo ao tamanho original do array, a única que realiza operações e retorna um array com o mesmo 
// tamanho é o map.

const numeros = [1,2,3,4,5]
 
const somatorio = numeros.reduce((acumulador, atual)=> {
    return acumulador + atual
})
 
console.log(somatorio);
 
const palavras = ["Hello", "World", "from", "reduce!"]
 
const frase = palavras.reduce((fraseCompleta, palavra) => {
    return fraseCompleta + " " + palavra
})
 
console.log(frase);