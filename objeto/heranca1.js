const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // o objeto não tem o atributo 'prototype' e sim '__proto__'
console.log(ferrari.__proto__) // a partir de '__proto__' é possível acessar o protótipo(como se fosse uma classe-mãe) 
// do objeto
console.log(ferrari.__proto__ === Object.prototype) // Todo objeto por padrão aponta para 'Object.prototype'
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // O 'Object.prototype' é o mais alto nível da hierarquia, logo ele
// não aponta para nenhum prototype

function meuObjeto() {} // funções também têm atributo 'prototype'
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

// um objeto em Javascript tem referência para seu protótipo, assim é definido o conceito de herança na Linguagem