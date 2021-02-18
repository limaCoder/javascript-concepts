let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
} // exemplo de um for não-for

for(let i = 1; i <=10; i++) { // Usado para quantidades determinadas de condições
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; /* quantidade de elementos num array, no caso 5*/ i++) {
    console.log(`nota = ${notas[i]}`)
}
