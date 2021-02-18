const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // é o mesmo que (pessoa.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradgimas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) /* nesse caso, o 'bind' é um método responsável por amarrar um
determinado objeto para ele ser o dono da execução daquele método, sempre que aquele método for chamado. Ou seja,
significa que quando você chamar essa função, sempre que você referenciar o 'this', o 'this' será o objeto que você
passou para a função blind. */
falarDePessoa()