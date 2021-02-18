const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma/*caso não seja passado um operador, a operação por padrão será soma*/) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // função anônima em chamada de função
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // arrow function sempre será uma função anônima

const pessoa = {
    falar: function () { // função anônima em objeto
        console.log('Opa')
    }
}

pessoa.falar()