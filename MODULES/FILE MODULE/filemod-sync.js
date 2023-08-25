// Synchronous method
const {readFileSync, writeFileSync} = require('fs')
 
// For reading the file
const firstFile = readFileSync('./content/first.txt', 'utf8')
const secondFile = readFileSync('./content/second.txt', 'utf8')

//  writeFileSync creates a file or replaces the text if existing

writeFileSync(
    './content/result.txt',
    `Here is the uuu : ${firstFile}, ${secondFile}`,
    {flag: 'a'} // for appending
)





