function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // try é um bloco que dentro dele tem um código que você julga que pode gerar algum tipo de erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // o catch está associado ao try. Se gerar erro no try, automaticamente o erro será capturado no 
        //catch e ele irá tratar o erro
        tratarErroELancar() // essa função contém o 'throw' que lança o erro para o usuário. Ele está no topo do arquivo
    } finally { // finally é o bloco que será executado mesmo que ocorra erro ou não.
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)