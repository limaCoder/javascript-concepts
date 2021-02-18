function getInteiroEntre (min, max) {
    const valor = Math.random(max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// Usado para quantidades indeterminadas de condições
while(opcao != -1) { // Enquanto opção for diferente de -1, continuará executando.
    // enquanto for verdadeiro, vai continuar repetindo, até que a condição seja false e
    // então o bloco sairá do fluxo. O While testa primeiro antes de executar o bloco de código
    opcao = getInteiroEntre(-1, 10)
    console.log(`opçõa escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')