const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// leia o forEach da seguinte maneira: "para cada elemento deste array, faça isto aqui"? Esse "aqui", no caso, seria 
// a callback.
aprovados.forEach(function(nome, indice, /*array*/ /*,*/ /*undefined*/) { // No for each, por padrão o primeiro 
    // parâmetro por padrão sempre será o nome/elemento, o segundo será o índice/posição, o terceiro o próprio array
    // e a partir do quarto retorna undefined
    console.log(`${indice + 1}) ${nome}`)
});

aprovados.forEach(nome => console.log(nome)) // arrow function

const exibirAprovados = aprovado => console.log(aprovado) // armazenando em uma variável
aprovados.forEach(exibirAprovados)