// window
console.log(this)

// window
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




