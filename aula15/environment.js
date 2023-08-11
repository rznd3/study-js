let num =  [9, 1, 7, 3, 5, 300, 987, 40]

num.push(11)
num.sort(function(a, b){return a-b})

console.log(num)
console.log(`The array has ${num.length} positions`)
console.log(`The first value of the array is ${num[0]}`)

let pos = num.indexOf(3)

if (pos == -1) {
    console.log(`Value not found`)
} else {
    console.log(`The value is at position ${pos}`) 
}