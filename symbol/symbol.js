let s = Symbol('name')
let s2 = Symbol('name')

console.log(s === s2)

let obj = {
    [Symbol('name')]: 'Gabriel',
    [Symbol('age')]: 20,
    country: 'Brasil'
}

    