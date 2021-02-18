/* Object = Grupo de pares chave e valor - 'chave' é o nome
do atributo/identificador e depois se passa um valor para ele.
Também é possível inserir um object dentro de um object
Nessa aula vemos notação literal de
objetos, que é diferente do JSON, que é um formato textual
que trata de interoperabilidade entre sistemas
JSON = texto
Object = atributos, comportamentos*/

const prod1 = {} //declaração literal de object
prod1.nome = "Celular Ultra Mega" 
prod1.preco = 4998.90 //atruições dinâmicas ao object
prod1['Desconto'] = 0.40 //evitar atributos com espaço

console.log(prod1)

/*Criando as chaves e valores dentro da própria declaração
do object*/
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)