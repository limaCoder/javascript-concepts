// Classe e função construtora têm mesmo intuito, servir de "molde" para criação de objetos. A diferença está mais na 
//sintaxe. Você não precisa definir um construtor, porém, se não o colocar, será usado o 
// contrutor padrão: constructor() {}

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor // O código indica que todo objeto Lancamento terá um nome e um valor. Neste caso o this 
        // está se referindo a atributos do objeto Lancamento. Somente com this.nome = nome que o valor passado como 
        // parametro para nome será atribuido ao atributo nome do objeto
    }
}

class CicloFinanceiro {
    constructor(mes, ano) { // Sobre ano e mes não terem sido utilizadas, na verdade eles estão disponíveis, sendo 
        // atributos de qualquer objeto criado a partir da classe CicloFinanceiro. Atributos não necessariamente 
        // precisam ser usados nos métodos.
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // No caso dentro de constructor irão apenas os atributos e fora dele os métodos. Ou seja, As funções sempre vão 
    //fora do corpo do Constructor

    addLancamentos(...lancamentos) { // os três pontos '...' é um parametro de Array
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor // soma o valor do lançamento com o valorConsolidado
        })
        return valorConsolidado
    }
    // - Percorre o array de lancamentos pegando cada elemento.
    // - Depois ele soma o valor que está dentro do elemento e atribui ao valorConsolidado
    // - Por fim retorna o valorConsolidado
}

// há dois objetos criados a partir da classe Lancamento: salario e contaDeLuz.
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

