const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})

// JSON.stringfy = converte um objeto para formato JSON
// o writeFile, ele recebe um diretório, nome de arquivo, o conteúdo e um erro. E caso não haja nenhum erro ele pega o 
// conteúdo (JSON.stringify) e cria um arquivo com esses dados

// O que gerao arquivo é o método writeFile fs.writeFile(), mas é necessário importar o fs antes de utilizar, seja com require,
// como o professor fez na aula, ou com import (já do ES6)

// o File System é um pacote nativo do Node para manipular arquivos. Na aula o professor utiliza para criar um arquivo, 
// mas também outros usos comuns do File System são ler, renomear, deletar e atualizar arquivos.

/* Framework - a planta arquitetônica segundo a qual estarei fazendo meu projeto

- Biblioteca - recursos que utilizo para auxiliar na construção do meu projeto; */