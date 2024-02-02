let conjunto = new Set()

// Sem duplicidade
conjunto.add('morango')
conjunto.add('morango')
conjunto.add('melancia')
conjunto.add('pizza')

conjunto.delete('pizza')

const tem = (oque) => (conjunto.has(oque)) ? `Tem ${oque}` : `Não tem ${oque}`

// for (let key of conjunto.values()) {
//     console.log(key)
// }

conjunto.forEach(key => console.log(key))
console.log('-------')

console.log(tem('pizza'))