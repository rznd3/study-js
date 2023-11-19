function hello(name) {
    let welcome = `Welcome, ${name}`
    write(welcome, 1)
}

function write(phrase, type) {

    switch (type) {
        case 1:
            console.log(phrase)
            break
        case 2:
            alert(phrase)
            break
        default:
            document.write(phrase)
    }
}

hello('Gabriel')