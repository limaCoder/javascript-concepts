console.log(soma(3, 4)) // o Javascript interpreta primeiro as funções e depois executa o código
// Por isso, mesmo a função vindo depois, é possível exibi-lá antes. É o famoso hoisting

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4)) // Já com as variáveis não é o mesmo caso, são exibidas depois

// named function expression // não é muito comum o seu uso, é mais recomendado para debugar o código com a função aparecendo nomeada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))