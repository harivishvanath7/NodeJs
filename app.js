const http = require('http')

const {readFileSync, read} = require('fs')

// Getting files
const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req,res) => {
    
    const url = req.url;
    console.log(url)
    
    if(url === '/'){
        // Passing the headers - status code and mime types
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
})

server.listen(5000)















