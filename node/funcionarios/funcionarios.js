/* O NPM é o nome reduzido de Node Package Manager (Gerenciador de Pacotes do Node). A NPM é duas coisas: Primeiro, e mais 
importante, é um repositório online para publicação de projetos de código aberto para o Node.js; segundo, ele é um 
utilitário de linha de comando que interage com este repositório online, que ajuda na instalação de pacotes, gerenciamento
de versão e gerenciamento de dependências.

O npm init é um wizard que vai te ajudar a criar/configurar o arquivo package.json.

O package.json é uma espécie de manifesto do seu projeto. Ele pode fazer várias coisas, completamente não relacionadas. 
Ele é um repositório central de configurações de ferramentas, por exemplo. Ele também é onde npm armazena os nomes e 
versões dos pacotes instalados.

O Axios é um cliente HTTP, que funciona tanto no browser quanto em node. js. A biblioteca é basicamente uma API que sabe 
interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para 
fazer requisições ajax no browser também funciona no servidor. */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = f => f.genero
const chinesas = f => f.pais
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //mulher chinesa com menor salário
    const func = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})

// quem converte o arquivo JSON para objeto é a biblioteca axios, então quando recebe o dado ele já vem como objeto.

//  o nodemon é uma biblioteca que uma vez instalada e executada fica monitorando o seu código para que toda vez que você 
// salve ele execute novamente o código em questão.

// O package-lock.json ele não é importante para o desenvolvedor, apenas para a aplicação, para nós que somos
// desenvolvedores só nos importa o package.json. Não se preocupe muito com o lock, ele é gerado automaticamente apenas 
// para descrever a árvore que foi gerada para que  as próximas instalações possam gerar árvores idênticas. 
// Com isso, ele só é importante para a aplicação.