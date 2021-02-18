const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // quando a extensão do arquivo não é .js, é preciso informar

// sincrono... (não recomendado)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono... (recomendado) readFile, por ser assíncrona, aceita uma função callback como parâmetro
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// sincrono (recomendado)
const config = require('./arquivo.json')
console.log(config.db)

// assincrono
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// o _dirname, é uma variável que tem o caminho que se encontra o módulo atual

// O require é indicado para carregar arquivos JS, enquanto o readFile e readFileSync são recomendados para leitura de 
// arquivos no geral.

/* O FS (File System) lê arquivos, Ler um arquivo é você por o seu programa para ler o que tem dentro do arquivo, 
geralmente são arquivos json e txt. No caso de arquivos mp3, pdf, gif, jpg, txt, xls, wmv, etc... O programa vai ler mas 
é como se estivesse "criptografado", não tem nada legível. */

/* O readdir espera dois parâmetros, o path e uma callback. Essa callback também tem dois parâmetros, o erro e os 
arquivos(esses parâmetros são obrigatórios). O parâmetro de erro serve para caso haja um erro na leitura da pasta você 
saiba qual o erro que deu, veja:

const fs = require('fs')
 
const pathInexistente = 'C:/path/inexistente'
 
fs.readdir(pathInexistente, (erro, arquivos)=> {
    if(!erro) {
        console.log(arquivos)
    } else {
        console.log(erro)
    }
}) 
// Resultado: 
[Error: ENOENT: no such file or directory, scandir 'C:/path/inexistente'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: 'C:/path/inexistente'
}
Quando não corre um erro, o parâmetro erro fica null então é por isso que quando você passa apenas o 
arquivos provavelmente não ocorre nenhum erro, dai ocorre o  null. */