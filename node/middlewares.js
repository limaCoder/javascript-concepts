// middleware pattern(padrão) (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice] (ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

// Recursividade é quando um método chama a si mesmo.

// Middleware é um padrão de projeto que possibilita o encadeamento de funções independentes. Onde você pode usar uma 
// callback next como parâmetro para indicar qual a próxima função a ser chamada.

/* Verificar se existe um middleware e o indice é menor que tamanho do array:

middleware && indice < middleware.length
Com essa checagem garantimos que existe uma função a ser chamada e que o indice ainda está dentro do tamanho do array.



O segundo && serve apenas para dizer que: se tudo isso for verdade execute essa função:

middleware[indece](ctx, () => execPassos(indece + 1)) */

/* Quando, num código, temos um encadeamento com &&, a checagem de toda a expressão se dará por cada parte, sendo a 
leitura da esquerda para a direita. Com isso em mente, é importante entender que, se nessa leitura for encontrado algo 
que resolve para falso, então o restante será ignorado.  */