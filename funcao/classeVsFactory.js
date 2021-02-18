class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João') // só pode utilizar o operador new em funções normais, em Arrow Functions não é 
// permitido a instanciação de um novo objeto já que elas não possuem um valor de this propriamente, pois ela 
// sempre se referência ao escopo que ela foi chamada. Ou seja, não é possível usar arrow functions como constructors
p1.falar()

const criarPessoa = nome => {
    return { 
        falar: () => console.log(`Meu  é ${nome}`) // esse objeto tem ciência do contexto léxico no qual foi declarado
        // ou seja, seu escopo é mais abrangente e por isso ele é mais determinístico.
    }
}

const p2 = criarPessoa('João')
p2.falar()