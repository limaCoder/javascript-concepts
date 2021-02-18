/* Função = Função é um verbo, uma ação, ele executa um
processo baseado numa sentença. A função define um bloco
associado (delimitado por chaves). Então temos a função, e 
logo depois o corpo função que é o bloco, no qual tem todas
as sentenças de código que serão executadas quando você
invocar a função. Então nao é nada mais do que um trecho de
código que você dá um nome a ele e pode reusar onde você
quer chamar dentro do seu programa.
Existem também funções anônimas, que são funções sem nome.*/

// Função sem retorno
function /*palavra reservada para definir função*/  imprimirSoma(a, b) /* parâmetros de entrada*/ {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o paramêtro 'b' ao não receber valor, é considerado Undefined, logo o resultado é NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Vai somar os dois primeiros parâmetros e ignorar o resto, já que não foram passados os parâmetros

imprimirSoma() // os dois parâmetros não receberam valor, logo são undefined, logo o resultado é NaN

// Função com retorno
function soma(a, b = 0 /* definindo um valor padrão*/ ){
    return a + b //  O return é usado dentro de funções, para indicar o que a função irá retornar ao final de sua 
    // execução. Uma função pode ter vários returns dentro dela, embora a sua execução finalize quando chega em um 
    // return.
}
// soma(2, 3) - não funciona fora do console.log
console.log(soma(2, 3))
console.log(soma(2)) // 2 + 0 = 2 
console.log(soma()) // Como 'a' não teve um valor padrão definido, diferente de 'b', o resultado é NaN


