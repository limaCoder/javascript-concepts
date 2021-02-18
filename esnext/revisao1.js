// let e const
{
    var a = 2
    let b = 3
    console.log(b) // 'let' tem escopo de bloco
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras/*operador rest*/] = 'Cod3r' // com string
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // com array
console.log(x, y)

const { idade: i, nome} = { nome: 'Ana', idade: 9 } // com objeto
console.log(i, nome)