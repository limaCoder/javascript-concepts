const funcs = []

for(var i=0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[4]()
funcs[8]() //Ambos não funcionam pelo 'var' não ter o escopo de bloco, e pegam o último valor da incrementação