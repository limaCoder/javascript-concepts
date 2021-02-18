require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // se definisse o freeze no objeto, seria possível aqui alterar o valor do Global, o que é 
// perigoso
console.log(MinhaApp.nome)

// Usar o objeto Global apenas em casos de exceções