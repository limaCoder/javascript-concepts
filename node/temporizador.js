const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () { // 1°* = seg, 2°* = min, 3°* = horas, 4°* = dia do mês, 5°* = mês, 6°* = dia da semana
    // /5 = a cada 5 segundos
    console.log('Executando Tarefa 1!', new Date().getSeconds()) // exibir os segundos
})

// Temporizadores padrões do JS
setTimeout(function () {
    tarefa1.cancel() // cancelando o temporizador anterior com o tempo determinado abaixo
    console.log('Cancela Tarefa 1!') 
}, 20000)
// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // executar no range de segunda à sexta. Ele está entre [] por que o que 
// vai ser retornado dele serão os dias da semana dentro do range 2 até 5. Ou seja, serão retornados 5 valores, segunda, 
// terça, quarta, quinta e sexta. E como são múltiplos valores, eles precisam ser colocados dentro de uma array. Por 
// isso o uso da notação [], para formar a array contendo os dias da semana.
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarega 2!', new Date().getSeconds())
})