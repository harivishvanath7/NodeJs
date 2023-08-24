const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("This is Our Home Page!!")
    }
    if(req.url === '/about'){
        res.end("This is Our About Page!!")
    }
    res.end(
        `<h1>Oops!!</h1>
         <h4>We couldn't find the page you searched!!</h4>
         <a href="/"> Back to Home Page </a>`
    )
})

server.listen(3000)





