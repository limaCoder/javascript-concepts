function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor // 'exclusivo ou', os dois obrigatoriamente
    // precisam ser diferentes, mas o exclusivo pode ser simulado com a diferença, como o uso de baixo.
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}    
}

console.log(compras(true/*trabalho1*/,true/*trabalho2*/))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

function confianca(emKevinFeige, naSuaFala) {
    const confiar = emKevinFeige && naSuaFala
    return {confiar}
}

console.log(confianca(true, false)) // False
console.log(confianca(false, true)) //False

// Logo, você precisa confiar no Kevin Feige && na Sua Fala, senão o resultado é falso e você não
//poderá confiar em nenhum dos dois.