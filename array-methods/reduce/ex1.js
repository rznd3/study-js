const names = ['Gabriel', 'John', 'Kawane', 'Kiara', 'Julia']

const namesCount = names.reduce((acc, curr) => {
    const firstLetter = curr.charAt(0).toLowerCase()
    acc[firstLetter] ? acc[firstLetter]++ : acc[firstLetter] = 1
    return acc
}, {})

console.log(namesCount)