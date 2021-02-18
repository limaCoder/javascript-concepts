function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.blind(this)*/, 1000)
}

new Pessoa

// O bind serve para atrelar o contexto da função ao objeto desejado. Por exemplo:

const pessoa = {
    nome: "Luis",
    cargo: "Analista" 
}
function imprimir() {
    console.log(this);
}
imprimir()
//Nesse primeiro exemplo, quando imprimimos o valor de this, vemos que é equivalente ao objeto global, a
//gora quando utilizamos o bind, temos o seguinte resultado

const pessoa = {
    nome: "Luis",
    cargo: "Analista" 
}
 
function imprimir() {
    console.log(this);
}
 
imprimir = imprimir.bind(pessoa)
 
imprimir()// Resultado: { nome: 'Luis', cargo: 'Analista'}