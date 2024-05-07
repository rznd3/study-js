let frutas = new Map()

frutas.set('01', ['morango', '7,45'])
        .set('02', 'melancia', '17,90')
        .set('03', 'limão', '5,00')
        
let instrumentos = new Map([
    ['01', 'guitarra'],
    ['02', 'bateria'],
    ['03', 'teclado']
])


// Sobrescrever
instrumentos.set('03', 'baixo')

// console.log(frutas)
// console.log(instrumentos)

// Métodos: set, get, delete, size, clear, keys, values, has
// console.log(frutas.get('01'))

instrumentos.forEach((chave, valor, map) => console.log(chave, valor, map))

const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = um

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = one





