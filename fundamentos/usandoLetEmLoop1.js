for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i=', i) // Não funciona, dado a condição de que o uso do 'let' é visível apenas dentro do bloco 
// devido ao escopo de bloco da palavra reservada.