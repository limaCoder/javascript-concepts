function teste1(num) {
    if (num > 7) 
        console.log(num) // Sem bloco, o If só irá analisar se é verdadeiro ou falso a primeira sentença, no caso essa.

    console.log('Final') //como não há um bloco associado ao if, ele sempre irá executar esse comando, pois o
    // Javascript considera que ele está 'fora' do if.
}

teste1(6)
teste1(8)

function teste2(num){
    if (num > 7); { // cuidado com ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)

// O certo
function teste3(num) {
    if (num > 7) 
    {
        console.log(num)
        console.log('Final')
    }
}

teste3(6)
teste3(8)