const { createReadStream } = require('fs')

// HigherWaterMark -- the size of the chunks of data that the stream will read at a time.

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,  
    encoding: "utf-8"
})

// Output Display
stream.on('data', (result) => {
    console.log(result)
})

// Error Handling
stream.on('error', (err) => {
    console.log(err)
})














