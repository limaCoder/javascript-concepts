// Object.preventExtensions
const produto = Object.preventExtensions({ // evita extensões para o objeto
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) // verifica se o Objeto é extensível

produto.nome = 'Borracha' // true
produto.descricao = 'Borracha escolar branca' // false
delete produto.tag // true
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // sela o objeto, ou seja, não é possível extender e nem deletar atributos
console.log('Selado:', Object.isSealed(pessoa)) // verifica se o objeto está selado

pessoa.sobrenome = 'Silva' // false
delete pessoa.nome // false
pessoa.idade = 29 // true, ainda é possível alterar os valores do objeto selado
console.log(pessoa)

// Object.freeze = selado + valores constantes
Object.isFrozen // para verificar se o objeto está congelado