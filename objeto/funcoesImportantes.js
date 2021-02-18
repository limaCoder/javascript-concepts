const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // exibir as chaves do objeto
console.log(Object.values(pessoa)) // exibir os valores do objeto
console.log(Object.entries(pessoa)) // exibir em arrays internos dentro de outro array 

Object.entries(pessoa).forEach(e => { // percorrendo o array
    console.log(`${e[0]}: ${e[1]}`)    
});

// Forma alternativa
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});


Object.defineProperty(pessoa, 'dataNascimento', { // definindo as propriedades de  atributo de um Object
    enumerable: true, //se pode ser listado ou não
    writable: false, // se pode ser sobrescrito ou não. Se for false, funciona como um 'freeze'. O defineProperty() trabalha direto com um atributo, diferente do 
    // freeze() que atua por todo o objeto. 
    value: '01/01/2019' // definindo um valor para esse atributo
})

pessoa.dataNascimento = '01/01/2017' // tentativa de sobrescrita
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 } // Objeto de destino
const o1 = { b: 2 }
const o2 = { c:3, a:4 } // o valor '4' de 'a' de 'o2' sobrescreve o valor de 'a' do objeto destino 'dest'
const obj = Object.assign(dest, o1, o2) // concatena os objetos

Object.freeze(obj)
obj.c = 1234 // não altera o valor de 'c', devido ao freeze acima
console.log(obj)