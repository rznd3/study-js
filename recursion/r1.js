function multiplica(num1, num2) {

    //Multiplicação por 0 é igual a 0
    if (num1 == 0 || num2 == 0) {
        return 0
    }
    //Caso base, onde a recursão para
    else if (num2 == 1){
        return num1
    }
    //Multiplicando através da soma com recursividade
    else {
        return (num1 + multiplica(num1, num2 - 1))
    }

}
  
let result = multiplica(5,4)
console.log(result)