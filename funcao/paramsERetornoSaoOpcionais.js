function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5)) //Está retornando undefined pois você está utilizando console.log tanto dentro da função 
//como ao executar a função. Então é necessário tirar um dos dois como:

/*
function area(largura, altura) {
  const areaCalculada = largura * altura
  if (areaCalculada > 20) {
    return `Valor acima do permitido: ${areaCalculada}m2.`
  }
  return areaCalculada
}
console.log(area(4, 6))

Ou

function area(largura, altura) {
  const areaCalculada = largura * altura
 
  if (areaCalculada > 20) {
    console.log(`Valor acima do permitido: ${areaCalculada}m2.`)
  } else {
    console.log(areaCalculada)
  }
}
area(4, 6)

*/