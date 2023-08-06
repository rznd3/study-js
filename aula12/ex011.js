var age = 12

console.log(`You are ${age} years old`)

if (age < 16) {
    console.log("You can't vote")
} else if (age < 18 || age > 65){
    console.log('Optional voting')
} else {
    console.log('Compulsory vote')
}