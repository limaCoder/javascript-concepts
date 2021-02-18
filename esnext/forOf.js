// 'for in' itera sobre índices, e 'for of' itera sobre valores

for(let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) { // pegando chave e valor do Map() em um array
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { // pegando apenas asa chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) {  // pegando apenas os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { // pegando chave e valor do Map() sem ser dentro de um array
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c']) 
for (let letra of s) {
    console.log(letra)
}