const loginUser = (email, password, callback) => {
    setTimeout(() => {
        console.log('user logged')
        callback({ email } )
    }, 1500)

    console.log('after function setTimeout')
}

const user = loginUser('gabriel@email.com', '123456', (user) => {
    console.log({ user })
})

//console.log({ user })
