// Uma factory retorna um novo objeto
module.exports = () => {
    return { // na arrow function o return só é implícito se você não usar as chaves. Usando chaves você deve explicitar 
        //o return.
        valor: 1,
        inc() {
            this.valor++
        }
    }
}