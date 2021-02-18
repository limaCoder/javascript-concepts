class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extends = tem como protótipo a classe tal/ ele é subclasse da superclasse tal
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chamando a função construtora da superclasse
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
// A profissão professor é retornado pois no construtor do pai definimos que por padrão seria 'Professor' 
// (ou seja se não passarmos nenhuma profissão ele vai atribuir automaticamente Professor)