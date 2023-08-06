var date = new Date()
var hour = date.getHours()

console.log (`Now it's ${hour} o'clock`)

if (hour < 0 || hour > 23) {
    console.log('Invalid time')
} else if (hour >= 0 && hour < 12){
    console.log('Good morning')
} else if (hour < 18){
    console.log('Good afternoon')
} else if(hour <= 23) {
    console.log('Good night')
}