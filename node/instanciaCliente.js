/* Cache é como um local de armazenamento para acessar mais rápido certas coisas. No exemplo da aula, como o resultado fica salvo 
em cache, é de lá que é buscada a informação. Ao invés de ter que fazer todo o caminho até o arquivo origem, a chamada da 
função busca o resultado do cache. Dessa forma a informação alterada do contador fica salva no cache.
Então para que sempre sejam criados novos objetos, com instâncias diferentes, utilizamos uma função factory! 
Então usando uma factory, na criação da instancia, ele não irá obter o resultado do cache 
A instancia unica está apontando pro mesmo endereço de memoria. Já a instancia nova gera um novo objeto por 
isso não aponta pro mesmo endereço de memoria, a primeira (instancia unica) é uma atribuição por referencia, a segunda 
(instancia nova) é uma atribuição por valor.*/

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)