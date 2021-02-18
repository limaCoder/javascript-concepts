const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)

// é muito comum referenciar a biblioteca lodash por '_'