// Função construtora funciona como se fosse uma classe das linguagens OOP

// Funções construtoras por padrão devem começar com letra maiúscula
function Carro(velocidadeMaxima = 200, delta = 5/*o quanto o carro vai acelerar de período em período*/) {
    // atributo privado(não pode ser acessado fora do escopo da função) = tornar privado com var, let e const
    let velocidadeAtual = 0

    // método público = se torna público com o uso do 'this'
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro // Instanciando um objeto Uno a partir da função Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)