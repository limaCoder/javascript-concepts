// estrategia 1 para gerar valor padrão. Pode gerar efeitos colaterais caso o valor '0' seja inserido
function soma1(a, b, c) {
    //No escopo da função temos que o parametro será igual ao valor informado OU caso não informado será 1
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Entre essas, a melhor de usar
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015 - A mais recomendada de usar
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// Como evitar concatenação de int com strings nos parâmetros

function soma4(a = 1, b = 1, c = 1) {
    if(typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number') {
      return a + b + c
    } else {
      return 'Insira números!'
    }
  }
   
  console.log(soma4(1, 2, 'ff'))