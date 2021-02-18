// Arrow function
const soma = (a, b) => a + b // return implícito se tiver uma linha/ função anônima
console.log(soma(2, 3))

// Arrow Function (this) // o this não varia numa Arrow Function
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // não altera
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() // por padrão ele assume o valor default definido
log('Sou mais forte') // mas um valor sobrescrito é mais forte

// operador rest = agrupa elementos em um array / no contexto e função ele se chama 'rest'
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // agrupando aqui, irá realizar uma soma