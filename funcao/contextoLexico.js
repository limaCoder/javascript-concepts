//contexto léxico = contexto em que uma função/variável/objeto foi escrito

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Irá exibir 'Global', pois uma função jamais esquecerá suas origens independente de onde esteja,
// ou seja, a função 'minhaFuncao()' ao ser chamada dentro da função exec(), irá sobrescrever o valor 'Valor' 
// declarado antes pelo valor 'Global', que é o valor de origem da função minhaFuncao()
