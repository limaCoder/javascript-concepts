// ES8: Oject.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // retorna apenas os valores do objeto
console.log(Object.keys(obj)) // retorna apenas as chaves do objeto
console.log(Object.entries(obj)) // transforma em arrays dentro de um array

// Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().latir())