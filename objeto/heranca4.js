function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto // new MeuObjeto = função construtora
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // Os dois apontam para a mesma refêrencia na qual foram instanciados 
// acima
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo' //mudando o seu atributo para que todos os seus filhos possam acessar
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // mudando a referência padrão 'Object.prototype' para a especificada 
// 'MeuObjeto 
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // uma função criada tem como protótipo por padrão 'Function.prototype'
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// __proto__ é a referência para o objeto-pai, já o prototype é o objeto que é usado para construir o __proto__ para 
// cada instância no momento onde você usa o new.