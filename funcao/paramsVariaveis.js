function soma() {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i] /* O arguments é um array que contém todos os parâmetros que você passou para a função, 
        ou seja, caso você chame a função da seguinte forma: função(a, b, c, d, e) o arguments dessa função vai ser:
        arguments[0] = a
        arguments[1] = b
        arguments[2] = c
        arguments[3] = d
        arguments[4] = e */
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

// Aberrações
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))