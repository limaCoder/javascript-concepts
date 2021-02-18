// Filter é um método que retorna verdadeiro ou falso. Se for verdadeiro, o array resultante terá aquele elemento, se for
// falso, não terá aquele elemento. Os elementos filtrados geram um novo array, não mexendo no original.
// filter() é basicamente o que o nome diz, um filtro, você coloca um array e uma condição e tudo que passar nessa 
// condição vai entrar na array nova.

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