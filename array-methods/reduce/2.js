const people = [
    { name: 'Gabriel', idade: 21 },
    { name: 'Kawane', idade: 21 },
    { name: 'Jorginho', idade: 33 }
]

const byAge = people.reduce((acc, person) => {
    acc[person.idade] = acc[person.idade] || []
    acc[person.idade].push(person.name)

    return acc
}, {})

console.log(byAge)