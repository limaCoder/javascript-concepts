function criarProduto(nome, preco/*,desconto = 0.1*/) {
    return { 
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Pão', 17))