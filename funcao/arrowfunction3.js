let comparacomThis = function (param) {
    console.log(this === param)
}

comparacomThis(this) // o this não é o this
comparacomThis(global)  // o this é estritamente igual ao escopo global somente no contexto de uma função.
// A partir do momento que eu instancio um objeto por ela, o this se altera para o objeto

const obj = {}
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global) //  nesse exemplo o comparaComThis irá ser apontado para o obj (nessa linha aqui 
//comparaComThis = comparaComThis.bind(obj)) e não mais para o escopo global, ou seja, quando passamos o objeto 
//global "global" e comparamos com o "this" ele da false, já que o escopo foi alterado.
comparacomThis(obj)

let comparacomThisArrow = param => console.log(this === param)
comparacomThisArrow(global) // Ele vai imprimir false aqui, pois esse this se referencia ao seu próprio modulo 
//(coisa da arrow function) e não ao objeto global da aplicação.
comparacomThisArrow(module.exports) // com arrow function, o this é associado ao módulo em foi escrito.
// módulo === arquivo arrowfunction3.js(exemplo) === module.exports
// Isso quer dizer que estamos referenciando a esse mesmo modulo da arrow function 
//(digamos que estamos referenciando ao seu escopo local da função

// o comportamento da arrow permanece intacta, ou seja, se tentarmos isso aqui:
comparacomThisArrow = comparacomThisArrow.bind(obj)
comparacomThisArrow(obj) 
// Não vai dar certo, pois não podemos usar o bind para mudar esse escopo da arrow
comparacomThisArrow(module.exports)




//Por que 'this' se liga ao objeto window? Como ' this ', sempre faz referência ao proprietário da função em que 
//está inserida, para este caso - já que agora está fora do escopo - a janela / objeto global.

//Quando está dentro do método de um objeto - o proprietário da função é o objeto. Assim, a palavra-chave ' this ' 
//está vinculada ao objeto. No entanto, quando está dentro de uma função, independente ou dentro de outro método, 
//sempre se refere ao objeto global / janela.