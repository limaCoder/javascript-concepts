let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // sintaxe mais reduzida e o this associado ao escopo em que foi usado/ função em que foi 
//escrita. Ou seja, o this não varia na arrow function
    return 2 * a
} 


dobro = a => 2 * a // return implícito // return de um único paramêtro // função de uma única linha
console.log(dobro(Math.PI)) //declaramos a variável dobro uma única vez, na linha 1. Na linha 5 e 9 atribuímos a 
//ela novas funções. ou seja, essa última atribuição sobrescreve as anteriores.

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um paramêtro
console.log(ola())