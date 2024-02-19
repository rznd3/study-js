const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf8')

const regexPhone = /\(\d+\)\s\d+-\d+/g
const allPhones = /\(\d{2}\)\s\d{4,5}-\d{4}/g

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g

/*
#meta-char or metacaracteres#
\d: digits 0-9
+: in sequence
g: global search
s: space separated
\: scaped character
{}: sequence of characters

*/

const matchPhone = database.match(allPhones)
console.log(matchPhone)

const matchCel = database.match(patternCel)
console.log(matchCel)   