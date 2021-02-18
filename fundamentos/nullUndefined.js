let valor // não inicializada
console.log(valor) // vai retornar undefined

valor = null /* ausência de valor. Deve-se usar null para
zerar uma referência, e nunca o undefined, pois é o papel da
linaguagem setar um valor para 'undefined' 
console.log(valor)
/* console.log(valor.toString()) = Erro! Não é possível
utilizar nada da variável enquanto o valor estiver nulo*/

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = undefined  // evitar
console.log(!!produto.preco)
// delete produto.preco // Removendo um atributo de um object
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)