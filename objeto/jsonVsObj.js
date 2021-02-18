// JSON = JavaScript Object Notation
// Formato textual
// Formato de dados, não executável, ou seja, não irá manipular funções
// usado para interoperabilidade entre sistemas, podendo ser usado não só em Javascript, como Java, C#, PHP e outras
// linguagens. Compartilhando dados entre sistemas ou entre o próprio sistema.
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) // transformar o objeto em um JSON

// Não fazer
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

// os elementos JSON devem ser delimitados por aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))