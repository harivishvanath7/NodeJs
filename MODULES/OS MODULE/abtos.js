const os = require('os')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

//getting info about the OS
console.log(currentOS)