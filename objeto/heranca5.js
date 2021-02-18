// Toda função em Javascript tem um atibuto '.prototype'

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') // split, join e reverse são funções de Array
    // Split vai quebrar as letras da String e gerar um array com as letras e os espaço em branco entre cada letra
    // sendo elementos. o reverse vai reverter a ordem dos elementos e o join vai juntar as letras, removendo os 
    // espaços em branco
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Efeitos catastróficos
String.prototype.toString = function () {
    return 'Lascou tudo' // não faça isso, pois irá sobrescrever a função toString
}

console.log('Escola Cod3r'.reverse()) // e isso não irá funcionar, pois irá retornar o que está escrito no return
// da função toString 'Lascou tudo'