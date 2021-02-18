// Array é objeto em Javascript
// Simulando Array com Objeto
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false // o enumerable é false por padrão, ou seja, não precisava defini-lô como false
});

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)