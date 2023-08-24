// Asynchronous method
const {readFile, writeFile} = require('fs')

console.log("Started 1st Task!!")

readFile('./content/first.txt','utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    
    readFile('./content/second.txt','utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
    
    writeFile(
        './content/result.txt',
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
    )
    console.log("Completed 1st Task!!")
})
})
console.log("Started 2nd Task!!")




