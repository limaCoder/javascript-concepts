// Com o objeto 'process' conseguimos tanto ler os dados digitados pelo usuário, como imprimir a sáida no console

const anonimo = process.argv.indexOf('-a') !== -1 // Se estiver presente na lista de argumentos(argv) a flag '-a' na 
// execução do terminal, irá retornar verdadeiro
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\r\n') // No Windows, ao invés de ser apenas '\n', deve-se colocar \r\n
    // stdout = standard put out = saída padrão - imprimir a mensagem/resultado
    process.exit() // encerrar o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // stdin = standard put in = entrada padrão - o que é enviado pelo teclado pelo usuário. O evento onData ocorre quando o usuário digita alguma coisa e dá enter
        const nome = data.toString().replace('\r\n', '') // substituir o Enter por um espaço vazio

        process.stdout.write(`Fala ${nome}!!\r\n`)
        process.exit()
    })
}