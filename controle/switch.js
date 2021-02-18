const imprimirResultado = function(nota) {
    switch(Math.floor(nota)){ // O switch ao invés de retornar uma expressão verdadeira ou falsa, retorna um valor
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // impede que o switch retorne os casos de baixo
        case 8: case 7: //  os casos podem estar na mesma linha. O uso de ',' não é permitido
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default: // o else do Switch
            console.log('Nota Inválida')
    }
    console.log('Fim!') // Por estar fora do bloco do Switch, é uma sentença que sempre será executada, independente
    // dos cases.
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)