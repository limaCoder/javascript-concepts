const nome = 'Rebecca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
//O String Template é delimitado por  backticks (crase) e realiza o processo de interpolação, na qual interpreta 
// a variável e a substítui dentro do texto.
//O exemplo de cima serve para mostrar que ele considera a quebra de linha e o espaço
const template2 = `Olá ${nome}!` //uso correto
console.log(concatenacao, template, template2)

//Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
//Função que torna todo o texto maiúsculo
console.log(`Ei... ${up('cuidado')}!`)

//O Template String foi uma função implementada em 2015 que serve tanto para concatenar variáveis strings de uma
// forma mais elegante, como também pode ser usado para operações matemáticas e uso de funções. 

// return `Eu sou ${this.nome}` é o mesmo que return 'Eu sou ' + this.nome