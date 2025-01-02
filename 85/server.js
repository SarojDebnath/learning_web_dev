console.log("Lets go with Backend")
var slugify = require('slugify')

console.log(slugify('some string')) // some-string

// if you prefer something other than '-' as separator
console.log(slugify('some string', '_'))  // some_string