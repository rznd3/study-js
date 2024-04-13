set = new Set()

set.add('morango')
set.add('melancia')

// Array para objeto
const array = Array.from(set.entries())
const obj = {}

array.forEach(item => obj[item[0]] = item[1])

console.log(obj)

// Uniao
{
    const conjunto1 = [1, 'hello', false, 100]
    const conjunto2 = ['hello', 200, true, 1]

    const set = new Set([...conjunto1, ...conjunto2])

    console.log('uniao', set)
}

// Intersecao
{
    const conjunto1 = new Set([1, 'hello', false, 100])
    const conjunto2 = new Set(['hello', 200, true, 1])

    const set = [...conjunto1].filter(valor => conjunto2.has(valor))

    console.log('intersecao', set)
}

// Diferenca
{
    const conjunto1 = new Set([1, 'hello', false, 100])
    const conjunto2 = new Set(['hello', 200, true, 1])

    const set = [...conjunto1].filter(valor => !conjunto2.has(valor))

    console.log('diferenca', set)
}