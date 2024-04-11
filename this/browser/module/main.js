// nesse caso não faz diferença
//"use strict"

import { test } from "./mod.js";

// undefined
console.log(this)

// undefined
function fExpression() {  
    console.log('this function expression')
    console.log(this)
}

// undefined
const fArrow = () => {
    console.log('this arrow function')
    console.log(this)
}

fExpression()
fArrow()




