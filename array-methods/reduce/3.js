const numbers = [-10, 0, 2, 4]

const doublePositive = numbers.reduce((acc, curr) => {
    if (curr > 0) acc.push(curr * 2)
    return acc
}, [])

console.log(doublePositive)