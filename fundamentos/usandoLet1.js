let numero = 1
//var numero = 1 = dá no mesmo que usar o let acima
{
    let numero = 2 // No let, o escopo do bloco estará visível apenas dentro do bloco
    console.log('dentro =', numero) // A linguagem dá preferência a esse escopo primeiro por ser menor/interno.
}

console.log('fora =', numero) // Usando let, por serem escopos diferentes, os valores vão poder coexistir

/*Extra: Enquanto a palavra reservada 'var' tem escopo global e
de função, a palavra reservad 'let, tem o escopo global, de
função e ainda o de bloco*/