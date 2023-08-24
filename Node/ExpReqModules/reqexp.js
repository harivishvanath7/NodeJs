// Requiring the export items

const names = require('./moduleexp-2')
const sayHi = require('./moduleexp-1')
const singlePerson = require('./diffmodexp')

// Requiring the invoked function- it'll run automatically
const addValues = require('./moduleexp-fun')

sayHi(names.john)
sayHi(names.peter)

console.log(singlePerson)