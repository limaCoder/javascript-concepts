import { get } from "http"

const tecnologias = new Map()
tecnologias.set('react', { framework: false}) // objeto sendo retornado com 'get'
tecnologias.set('angular', { framework: true})

console.log(tecnologias. react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'], // no Map, podemos colocar funções, objetos e valores númericos como chave
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // com 'has' perguntamos se o elemento contidos nos parênteses está contido no Map
chavesVariadas.delete(123) // deletando o elemento
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // perguntando a quantidade de elementos contidos no Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // não é possível duplicar a chave, ou seja, aqui o 'b' vai suprimir o valor de 'a' acima
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

/* uma vantagem do Map é que suas chaves são únicas! Ou seja, você nunca terá um registro duplicado! E mais uma coisa, no 
Objeto temos apelas uma chave simples, por exemplo: 

const pessoa = {
    nome: 'Fulano'
}

Mas em Maps podemos ter chaves de qualquer tipo, ou seja, objetos, arrays e em seguida, valores atrelados a essas 
chaves "complexas".

Em resumo, é recomendado o uso do map quando você deseja que não hajam registros duplicados ou precise utilizar uma 
estrutura de dados mais complexa. */