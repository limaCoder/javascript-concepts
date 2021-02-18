function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

// é possível instanciar objetos a partir de uma classe, de uma função factory e de função construtora


// com arrow function
function Pessoa2(nome2) {
    this.nome2 = nome2
    this.falar = () => console.log(`Meu nome é ${nome2}`)  
}
 
const p1 = new Pessoa('Leonardo')
p1.falar()