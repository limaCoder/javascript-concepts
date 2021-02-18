// IIFE -> Immediately Invoked Function Expression

(function() { // anônima e delimitada por parênteses
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// sempre é importante que a última sentença de código antes de uma IIFE seja finalizada com ponto e vírgula. 
// Veja esse exemplo:

(function dizOla(){
    console.log("Ola!")
})();
 
(function dizNome(nome){
    console.log(`Me chamo ${nome}.`)
})("João")
 
//saída esperada:
// Ola!
// Me chamo João.

// Outra sintaxe da IIFE
!function() {
    console.log("será invocada na hora");
    console.log("e fugindo do escopo mais abrangente (global)");
    let a = 20;
    console.log(a);
}()