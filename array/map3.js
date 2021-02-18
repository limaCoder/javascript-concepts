Array.prototype.map2 = function(callback) { // mesma lógica usada para forEach em 'forEach2.js', para entender como
// funciona o método por dentro
    const newArray = []
    for (let i = 0; i < this; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

/*Aqui nós temos um array onde cada elemento é uma
string no formato JSON.*/
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', //elemento 1
    '{"nome": "Caderno", "preco": 13.90}', //elemento 2
    '{"nome": "Kit de Lapis", "preco": 41.22}', //elemento 3
    '{"nome": "Caneta", "preco": 7.50}' //elemento 4
]
 
/*Agora vamos para a lógica da questão*/
 
/*Essa função recebe um json e o transforma em um
objeto, que nesse caso será um produto*/
const paraObjeto = json => JSON.parse(json)
 
/*Essa função recebe um produto e retorna apenas o
seu preço */
const apenasPreco = produto => produto.preco
 
/*Nesse próximo passo nós utilizaremos 2 métodos
maps passando as duas funções acima. Na ordem de
precedência ficará assim: o primeiro map retornará
para o segundo map um novo array onde ele transformará
os JSON's do array carrinho em objetos através da
função arrow paraObjeto. Por sua vez, o segundo map
criará um novo array que conterá o preço de cada produto retornado pelo primeiro map, esse novo array será armazenado 
na constante resultado*/
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)