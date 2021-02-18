const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // criando um objeto a partir de um protótipo passado nos parênteses
filha1.nome = 'Ana' // definindo o valor do atributo dinamicamente
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} // definindo as propriedades e valores para o objeto
    // criado a partir do protótipo passado nos parênteses
})

console.log(filha2.nome)
filha2.nome = 'Carla' // writable: false, logo não sobrescreve
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) { // percorrendo as chaves do objeto
    filha2.hasOwnProperty(key) ? // o objeto 'filha2' tem as chaves como sua própria propriedade?
        console.log(key) /*true: retorna o nome por ser sua propriedade*/ : console.log(`Por herança: ${key}`)/*retorna
        as chaves que não são de sua propriedade, e sim herdados como 'corCabelo'*/
}