// concat = método para concatenar arrays e gerar uma nova, sem excluir a originaç

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos) // passando como param a varíavel que tem o array que você deseja concatenar
console.log(todos, filhas, filhos)

console.log([].concat([1,2], [3, 4], 5, [[6, 7]]))