// colocamos a função forEach2 no protótipo do array para que ela possa ser invocada à partir de um array. É n
// é necessário usar prototype porque queremos quer a função forEach2 fique disponível para qualquer array
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]/*valor atual*/, i/*indíce*/, this/*array em si*/)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// callback: é uma função passada como parâmetro de outra função.