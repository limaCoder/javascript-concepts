// console.log(global)
global.MinhaApp = Object.freeze({ // Usando o freeze para que o atributo criado aqui no Global seja imútavel.
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})