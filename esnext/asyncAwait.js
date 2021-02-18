// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => { // funcção marcada com async / tornando um código assíncrono mais síncrono
    const ta = await getTurma('A') // o await não irá funcionar se a função não irá funcionar se a função não esiver 
    // marcada com 'async'  
    const tb = await getTurma('B') // com o await, a chamada espera ser resolvida ou rejeitada para passar para próxima
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc) // juntar as três variáveis em um array
} // retorna um objeto AsyncFunction

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))

/* para pegar um valor de uma promise, só vai dar certo através do then, ou através de métodos async/await. */

/* Então se eu quiser fazer um código sincrono eu faço ele normal, e se quiser fazer ele assincrono é só colocar a 
assinatura async nas funções que passa a ser comunicado de forma assincrona */

/* 
Em comunicação Assíncrona, cada bola tem um número de sequência, que permite que seja colocada na sua posição. Isto 
permite que as bolas sejam enviadas e recebidas por qualquer ordem, uma vez que esse número de sequência identifica a 
posição de cada bola (letra) na mensagem.

Em comunicação síncrona, as bolas têm que ser enviadas e recebidas de forma sincronizada, mantendo uma ordem bem 
definida: a primeira bola (letra) a ser enviada, tem que ser a primeira a ser recebida e assim sucessivamente. */