//Como feito em aula ↓

function rand({ min = 0, max = 1000 } = {}) { // Estamos extraindo do parâmetro as propriedades min e max. 
    //Caso o objeto não tenha essas propriedades, elas serão inicializadas como 0 para min e 1000 para max!
    const valor = Math.random() * (max - min) + min // basicamente o que o Math.random() * (max-min) + min faz é 
    //criar um número que fique dentro do intervalo de números informado.
    //O random() é um método do Math que cria um número aleatório entre 0 e 1 (0.1, 0.002, 0.004, etc...), 
    //em seguida este número gerado é multiplicado pela diferença do max - min e depois é somado o valor do mínimo 
    //para que ele fique dentro do intervalo de números informado.
    //Vamos supor que random gerou o valor: 
    //0.14263930273579306
    //Logo a formula estaria estruturada da seguinte forma:
    //0,14263930273579306 * (10 - 0) + 0 = 1,4263930274
    //Quando arredondamos para baixo com o Math.floor(), temos o valor 1.
    return Math.floor(valor) // floor = arredonda o número para baixo 
}
const obj = { min: 1, max: 5 } // o valor varia entre 1 e 5
console.log('resutado da aula ', rand(obj))
console.log(rand({ min: 955 })) // o valor varia entre 955 (aqui foi definido como mínimo) e 1000
console.log(rand({})) // varia entre os valores padrão 1 e 1000
console.log(rand()) // -> na versão 2015, dava erro por tentar desestruturar algo que está undefined ou null, mas
//a partir da versão 2017, ao fazer o destructuring no parâmetro da função e colocar = {} (objeto vazio),
//irá funcionar.

//gerando valor entre o maximo e o minimo ↓
function GenerateRandomValue(minimum, maximum) {
    min = Math.ceil(minimum); // ceil = arredonda o valor para cima
    max = Math.floor(maximum)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = GenerateRandomValue(1, 5);
console.log('resultado entre minimo e máximo: ', result);