// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa! Ou tenha muito cuidado na hora de fazer

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // __proto__ significa = tem como prótotipo. Ou seja, o filho
// tem como protótipo o pai, o pai tem como protótipo o avô, e assim por diante, até chegar no Object.prototype que é
// o maior da hierarquia
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // o filho herda todos os atributos de seus protótipos

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h` // this referencia o objeto atual
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing/sobrescrita da velocidadeMax de seu protótipo
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // a função status() dentro do obj volvo serve para que ele utilize o o valor 
        // setado em return dentro do obj pai carro, pois como ele está passando status de novo dentro de volvo haveria 
        // um sombreamento da função, mas com o uso do 'super' isso não ocorre e ainda ele pega os valores dela 
        // como velAtual e VelMax.
    }
}

Object.setPrototypeOf(ferrari, carro) // estabelecer respectivamente uma relação entre um objeto e seu protótipo
// Object.setPrototypeOf(ObjetoDesejado, PrototipoDoObjeto)
Object.setPrototypeOf(volvo, carro) //  motivo de não imprimir os atributos velAtual e velMax, é porque o 
// toString (converte objeto para string) do objeto, por padrão, só busca os atributos que são propriamente desse 
// objeto, não fazendo uma busca no protótipo. Mas o objeto volvo herda esses atributos do objeto pai. Para ver 
// isso, basta referenciar diretamente esses atributos.

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())