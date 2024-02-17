const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf8')

const patternDate = /(\d{2}[./ ]?){2}\d{4}$/gm

const matchDate = database.match(patternDate)
console.log(matchDate)