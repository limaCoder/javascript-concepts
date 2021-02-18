const pilotos = ['Vettel', 'Alonso', 'Rainkkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! / remove o último elemento do array
console.log(pilotos)

pilotos.push('Versatappen') // adiciona o último elemento do Array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array!
console.log(pilotos)

pilotos.unshift() // adiciona o primeiro elemento do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas','Massa')
console.log(pilotos)

// remover 
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do pedaço especificado nos parênteses
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai do 1 até o 4, mas sem considerar o último(4)
console.log(algunsPilotos2)