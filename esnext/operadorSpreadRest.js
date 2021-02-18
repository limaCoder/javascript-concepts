// operador ... rest(juntar) - funções /spread(espalhar) - objetos e arrays
// usar rest com parâmetro de função

// usar spread com objeto - espalhando os atributos
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)