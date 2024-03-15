const betterDeveloper = 'gabriel'

function whoIsBetterCallback(callback, errorCallback) {

    return new Promise((resolve, reject) => {

        if (betterDeveloper != 'gabriel') {
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'You are the best!' 
            })
        }

    })

}

whoIsBetterCallback()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.message)
    }).catch((error) => {
        console.log(error.name + ' ' + error.message)
    }) 