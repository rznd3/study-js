const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf8')

const patternCPF = /(\d{3}[.-]?){3}\d{2}/g

const matchCPF = database.match(patternCPF)
console.log(matchCPF)