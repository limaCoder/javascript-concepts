const nums = [1, 2, 3, 4]

// For com propósito
// Assim como o forEach, ele tem um for interno
// Ele transforma o array, gerando um novo array com o mesmo número de elementos, porém o original continua inalterado
// e existindo.

/*Aqui eu crio uma variável que armazenará o retorno
da função map aplicada ao array nums*/
let resultado = nums.map(function(e) { // /*A função map recebe como parâmetro uma outra função que será 
    //responsávelpela alteração dos elementos do array, nesse caso pegará cada elemento e multiplicará por 2.*/
    return e * 2
});

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // é possível fazer vários maps de uma vez, e seu
//resultado são os maps encadeados
console.log(resultado)