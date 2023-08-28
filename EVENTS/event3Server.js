const http = require('http')

// Uses EventEmitter API
const server = http.createServer()

// Emits request event
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)     













