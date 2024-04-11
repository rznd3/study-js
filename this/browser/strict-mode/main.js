//"use strict"

// window
console.log(this)

// undefined
function fExpression() {  
    console.log('this function expression')
    console.log(this)
}

// window
const fArrow = () => {
    console.log('this arrow function')
    console.log(this)
}

fExpression()
fArrow()




