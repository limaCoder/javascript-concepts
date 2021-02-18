const funcs = []

for(let i=0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[4]()
funcs[8]() //Usando 'let', a função tem consciência de quando foi definida