function getInteiroEntre (min, max) {
    const valor = Math.random(max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroEntre(-1, 10)
    console.log(`opçõa escolhida foi ${opcao}.`)
} while (opcao != -1) // Ele irá continuar executando até que essa determinada condição seja falsa.
// No 'Do While' mesmo que a condição já seja falsa, ele irá executar o código pelo menos uma vez,
// ou seja, o 'do while' executa o bloco de código e depois faz o teste.

console.log('Até a próxima!')