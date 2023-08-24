const {readFile} = require('fs')

console.log('First Task Started')


readFile('./content/test.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})

console.log('Starting next task')