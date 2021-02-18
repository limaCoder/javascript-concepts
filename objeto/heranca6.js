function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new // essa aula é só para mostrar como o new funciona por debaixo dos panos
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype //  f.prototype é o prototype da função Aula, não de Function. O __proto__ de Aula é 
    //que é Function. Ao definir o prototype como sendo de Aula, o que for colocado no prototype de Aula, 
    // estará disponível para todas as instâncias de Aula
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)