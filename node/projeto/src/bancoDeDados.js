const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    //Testa se o produto já tem ID
    if (!produto.id) produto.id = sequence.id //Se ñ tiver, seta um novo ID. Dessa forma, o uso de if é para saber se o produto tem ou não um id. Se ocorrer de não ter, ele irá atribuir um id por meio do objeto sequence.
    produtos[produto.id] = produto //Cria um atributo cuja chave é o ID e o valor é o produto em si. Quando fazemos 
    //produtos[produto.id] = produto, estamos acessando o atributo produto.id do objeto produtos (lembre-se da notação 
    //colchete, que podemos utilizar em JS para acessar atributo de um objeto). Caso esse atributo não exista, será 
    //criado. O objeto produtos pode estar ou não vazio. Depois, associamos a esse atributo o valor da variável produto,
    // recebida por parâmetro. O objeto que é salvo é retornado depois. 
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos) // retornar os valores do produto
}

/* function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
} */

module.exports = { salvarProduto, getProduto, getProdutos } // exportando para fora do módulo

/* Em objetos conseguimos acessar e setar propriedades com colchetes também, veja: 

const pessoa = {
    nome: 'Lucas'
}
 
console.log(pessoa['nome']);
 
pessoa['profissao'] = 'Desenvolvedor'
 
console.log(pessoa.profissao);
console.log(pessoa['profissao'])
 
 Resultado: 
 Lucas
 Desenvolvedor
 Desenvolvedor */
