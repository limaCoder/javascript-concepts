// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() { // variável de um escopo mais interno tem prioridade sobre a de um externo
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())