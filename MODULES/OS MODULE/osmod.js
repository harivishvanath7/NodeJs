const os = require('os')

//info about currenrt user

const user = os.userInfo()
console.log(user)

// get system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)