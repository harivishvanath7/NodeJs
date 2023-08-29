var http = require('http')
var fs =  require('fs')

http.createServer( function(req, res){

    //Synchronous Approach
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)


    // With Streams

    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })

    fileStream.on('error', ()=>{
        res.end(err)
    })
})

.listen(5000)

























