const EventEmitter = require('events')

// instance created in order to emit & listen for an event 
const customEmitter = new EventEmitter

// on - listen for an event
// emit - emit an event

customEmitter.on('response', () => {
    console.log('Data Recieved')
})

customEmitter.emit('response')




























