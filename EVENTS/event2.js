const EventEmitter = require('events')

const customEmitter = new EventEmitter

// With Arguments

customEmitter.on('response', (name, id) => {
    console.log(`Data Recieved : ${name} ${id}`)
})

customEmitter.emit('response', 'john', 34)




















