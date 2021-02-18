const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) { 
    return nota < 7
})

console.log(notasBaixas2) // Enquanto o forEach() apenas executa uma função com cada um dos elementos da array, o 
//filter gera uma nova array com os resultados da função. O filter é literalmente como o nome diz, um filtro, 
//ou seja, você vai passar uma função que vai filtrar alguns valores da array, analisando cada um array se der true
//ou false e o filter vai gerar uma array nova com os elementos que deram true de acordo com a condição.


// Com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// com arrow function criando uma função que pode ser reutilizada
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasMenorQue7)
