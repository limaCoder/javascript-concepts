module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}

/* Quando é utilizado esses 3 pontos num parâmetro de uma função significa que está sendo utilizado o operador spread. 
O que ele faz é passar um array como argumento para a função. Ou seja, esse '...nomes' mostra que está sendo 
passada uma array chamada nomes como parâmetro para aquela função.

Já a questão do Map é o seguinte. O Professor criou uma arrow function, ou seja, aquela variável nome antes do => é a 
variável que ele está criando naquele momento para ser usado dentro da arrow function. E o que ela vai receber, já que 
é um map, são os elementos da array, de um em um, até acabar a array. Ou seja, ele vai pegar a array nomes e passar por 
todos os elementos, de um em um, por isso ele colocou a variável como nome. */