// Variáveis var têm dois escopos possíveis: variável global, que pode ser usada por toda sua aplicação e variável
// no escopo de função. O escopo é até onde a variável é visível

{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera) /* Em outras linguagens, quando se define uma variável dentro de um bloco, ela fica
                visível apenas dentro do bloco, e não fora, como é o caso usando a palavra reservada 'var' no
                Javascript*/
            } 
        } 
    } 
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local) /* Parte 1 - Quando se define uma variável dentro de uma função, o escopo dela é apenas dentro
                          da função, e não é visível fora da função*/
}

teste()
console.log(local) // Parte 2 - Logo, aqui dá erro

/* Extra: Ao declarar uma variável fora de uma função, ela é global, com a vantagem de poder ser acessada de
qualquer lugar, porém, qualquer sobrescrita pode gerar um problema muito sério. Ou seja, a dica é fugir do
escopo global*/