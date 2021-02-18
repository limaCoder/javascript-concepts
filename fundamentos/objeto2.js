/* console.log(typeof object)
console.log(typeof new object) */ // com a palavra reservada 'new', você instancia uma função

const Cliente = function () { }
console.log(typeof Cliente)
console.log(typeof new Cliente) // Também se instancia funções que você mesmo definiu

class Produto { } // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) //Também se cria instâncias a partir de uma classe, e uma classe em Javascript
// não é nada mais do que uma forma alternativa de criar uma função.