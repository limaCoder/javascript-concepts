function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // o resolve aceita apenas um único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e)) // tratando o erro

/* 1º foi feita a função que retorna uma Promisse;

2º Na Promisse podem ser inseridos 2 parâmetros, sendo o 1º resolve, 2º reject;

3º o setTimeOut é só para ter um timing....

4º na linha 9 sempre que o falarDepoisDe for executado: a )1º então (then) : pegará a frase inserida nos parâmetros e 
concatenará com a string. b) o 2º então (then) é para fazer o console.log */

/* O processamento síncrono é quando há um fluxo bem definido na execução do código. Pro exemplo, seu código tem 20 linhas. 
Se ele for síncrono, só irá executar a linha seguinte depois que a atual já tiver sido executada.

Já um código assíncrono pode executar fora dessa ordem. Uma instrução na linha 5, por exemplo, poderia ser assíncrona e 
só terminar sua execução 15 segundos depois, por exemplo. Mas, como é assíncrona, a execução das demais linhas desse 
código não esperariam a instrução assíncrona terminar a execução. */