function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado...')
    }
}

soBoaNoticia(8.1) // true
soBoaNoticia(6.1) // false

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // false 
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(null) // false
seForVerdadeEuFalo(NaN) // false
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo('') // false
seForVerdadeEuFalo({}) // true
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ') // true
seForVerdadeEuFalo('?') // true
seForVerdadeEuFalo([]) // true
seForVerdadeEuFalo([1, 2]) // true