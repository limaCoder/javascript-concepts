const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante/*/param*/ => console.log(fabricante)) // para cada elemento do array, chama a função
//callback é passar uma função e essa função será chamada quando um evento acontecer

// O forEach executa um certo trecho de código para cada elemento de uma array, é bem parecido com o for, só que 
// ao invés de você definir quantas vezes ele vai ser executado, ele executa o número exato de elemento de um array.