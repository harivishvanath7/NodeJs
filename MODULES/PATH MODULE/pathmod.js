const path = require('path')

// Gives the file path's Seperator -"/"

console.log(path.sep)

// Gives the file Path

const filePath = path.join('/Content','subfolder','test.txt')
console.log(filePath)

// To get the base file, i.e, end

const baseFile = path.basename(filePath)
console.log(baseFile)

// To get te absolute path

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolutePath)




