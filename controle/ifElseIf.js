/*Aqui nós setamos que a função entre recebe os dois
parâmetros, início e fim*/
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
//Um prototype inicialmente aponta para um objeto vazio, o qual, depois, pode ter como propriedades novos métodos 
//para serem utilizados. Nesse caso o this é a variável(number) que foi criada e que está sendo usada pra chamar a 
//função 'entre'. Com o prototype você pode adicionar funções para o Number, assim você pode chamar essa funções 
// diretamente de números.

const imprimirResultado = function(nota) {
    if(nota.entre(9, 10)) { // Com 'nota.entre', tornamos o 'entre' um método de Number e como nota será um number, 
    // herdará todos métodos de Number.
        console.log('Quadro de Honra')
    }
    else if(nota.entre(7, 8.99)) { // else if = else com uma condição associada
        console.log('Aprovado')
    }
    else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    }
    else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }
    else{
        console.log('Nota inválida')
    }
}

imprimirResultado(10) // Quadro de Honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3) // Reprovado
imprimirResultado(-1) // Nota Inválida
imprimirResultado(11) // Nota Inválida

// Forma alternativa
function Avaliacao(nota){
    if (nota >=9 && nota <= 10){
        console.log('Quadro de honra!')
    } else if (nota >= 7 && nota <= 8.99){
        console.log('Aprovado!')
    } else if (nota >= 4 && nota <= 6.99){
        console.log('Recuperação!')
    } else if (nota >=0 && nota <= 3.99){
        console.log('Reprovado!')
    } else{
        console.log('Valor inválido!')
    }
} 

/* A diferença em se usar o else if ou usar apenas vários if:
Quando você utiliza o 'else if' você indica para a linguagem que todo o código faz parte de uma mesma condição, 
ou seja, apenas um daqueles casos irá acontecer.
Já quando você utiliza vários 'if' separadamente eles funcionam de forma independente. Pode ser que vários deles 
sejam executados dependendo da situação.
Em resumo, vários 'else if' significa que aquele código inteiro só vai entrar em uma das condições e executar só 
naquela situação enquanto que vários 'if' separados funcionam independente uns dos outros, ou seja, caso algum caso 
deles aconteça ele vai executar, podendo vários executarem dependendo da situação.
Ou seja, NUNCA USAR VÁRIOS IFS DENTRO DE UM BLOCO */