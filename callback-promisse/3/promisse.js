const p = new Promise((resolve, reject) => {
    let a = 3
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then: ' + message)
}).catch((err) => {
    console.log('This is in the catch: ' + err)
})