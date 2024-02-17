const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf8')

const regex = /Anna/

const matchRegex = database.match(regex)

