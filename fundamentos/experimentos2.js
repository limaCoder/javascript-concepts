// O global no node nada mais é que um objeto que carrega arrays, objetos, funções, atributos... informações 
//necessárias para o funcionamento do Node.

// se executar: 
console.log(global) 
//Verá que ele é um objeto muito grande. No node cada arquivo representa um módulo, é ai que entra o 
//objeto module.exports (que é representado, também, pelo this). O module.exports é um objeto que contém tudo 
// aquilo que queremos exportar se formos usar esse módulo em outro lugar da aplicação. Por exemplo: 

//Crie um arquivo chamado teste.js e nele escreva o seguinte código: 
let a = 3 /*Criamos uma variável 'a' cujo escopo é o módulo*/
global.b = 4
module.exports.c = 5

//Logo depois crie um arquivo chamado teste2.js e nele escreva o seguinte código:

let teste = require('./teste') /*Aqui nós importamos o módulo teste.js para esse módulo teste2.js*/
 
console.log(teste)
 
console.log(teste.a);
 
console.log(teste.b);
 
console.log(teste.c);

//Ao executar o teste2.js teremos como saída: 

//[Running] node "c:\Users\Daniel\Desktop\Estudo\teste2.js"

/*Ao imprimirmos o teste veremos que nele só existe o
atributo 'c' que foi justamente inserido no module.exports
(ou seja, no que deve ser exportado)*/
// = { c: 5 }
 
/*a variável 'a' em teste.js tem escopo do módulo então
não está acessível em teste2.js*/
// = undefined
 
/*A variável 'b' em teste.js, apesar de ter escopo global,
estar dentro do objeto global, ainda assim não foi
exportada para teste2.js*/
// = undefined
 
/*Aqui entendemos que a função do module.exports é também
definir o que será exportado para outros módulos via require.*/
