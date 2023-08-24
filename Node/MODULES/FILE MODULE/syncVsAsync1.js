// By Synchronous Method
const {readFileSync, writeFileSync} = require('fs')

console.log("start")

const first = readFileSync("./content/first.txt", "utf-8")

const second = readFileSync("./content/second.txt", "utf-8")

writeFileSync(
    "./content/newwrite.txt",
    `Lol!! The content is : ${first}, ${second}`,
    {flag: 'a'}
)

console.log("Task Done!!")
console.log("start the next")







