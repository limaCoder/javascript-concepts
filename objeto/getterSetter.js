const sequencia = {
    _valor: 1, // o uso do '_' por convenção torna o atributo privado, mas isso não quer dizer que não é possível
    // alterar seu valor. 
    get valor() { return this._valor++ },
    set valor(valor) { // O javascript permite que use o mesmo nome para as funções 'get' e 'set', ambos usados para
    // validação   
        if(valor > this._valor) {
            this._valor = valor // impedindo que o valor digitado seja maior que o atual
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não funciona, pelo motivo do comentário acima
console.log(sequencia.valor, sequencia.valor)


