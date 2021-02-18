/// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco') /// .add = adicionando elementos
times.add('São Paulo').add('Corinthians') // encadeado
times.add('Flamengo')
times.add('Vasco') // não vai, pois não repete

console.log(times)
console.log(times.size) // quantidade de elementos
console.log(times.has('vasco')) // false
console.log(times.has('Vasco')) // true

times.delete('Flamengo') // deletar elemento
console.log(times.has('Flamengo')) // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // transformar o array em um Set(), com a conversão, ele ignora as repetições como 
// 'Lucas' e só apresenta uma vez
console.log(nomesSet)