const loginUser = (email, password) => {
    setTimeout(() => {
        console.log('user logged')
        return { email } 
    }, 1500)
    
    console.log('after setTimeout')
}

const user = loginUser('gabriel@email.com', '123456')

console.log({ user })