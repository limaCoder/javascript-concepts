/* Com a notação ponto, você acessa membros e funções */

console.log(Math.ceil /* API */(6.1))

const obj1 = {}
obj1.nome = 'Bola' // A notação ponto é mais conveniente de ser usada por ser mais enxuta
// obj1['nome'] = 'Bola2' //Sobrescreve o atributo de cima, porém por ser muito fléxivel, não é recomendado 
// o seu uso
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // o uso do 'this' torna o atributo público, para ser acessado de qualquer lugar
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

