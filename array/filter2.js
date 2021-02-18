Array.prototype.filter2 = function(calback) { // // mesma lógica usada para forEach em 'forEach2.js', para entender como
// funciona o método por dentro.
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(calback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // Não precisa indicar se é true or false

// Filters encadeados
console.log(produtos.filter(caro).filter(fragil))