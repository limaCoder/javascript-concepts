// Factory é uma função que retorna um objeto, por isso se chama Factory, pois 'fabrica' objetos.

function criarPessoa() {
    return { 
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())