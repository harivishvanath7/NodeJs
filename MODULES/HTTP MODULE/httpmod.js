const http = require('http')

// CREATING A SERVER
const server = http.createServer((req, res) => {    // req-REQUEST, res-RESPONSE
    res.write('Welcome to our home page')
    res.end()
}) 

server.listen(5100)     // Server will run at port 5000













