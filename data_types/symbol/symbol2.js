let s1 = Symbol('morango')
let s2 = Symbol('morango')

// console.log(s1 === s2)

const obj = {
    nome: 'Gabriel',
    idade: '21',
    [Symbol('id')]: 'unico'
}

const s = Object.getOwnPropertySymbols(obj)

const dados = s.map(sym => obj[sym])

console.log(dados)

