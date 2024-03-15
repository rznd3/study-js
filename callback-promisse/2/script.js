function newButton(text, callback) {
    // Capture the body
    const $body = document.querySelector('body')
    // Create button
    const $button = document.createElement('button')
    // Insert text into button
    $button.textContent = text

    callback($button)
    
    // Insert the button into the body
    $body.insertAdjacentElement('beforeend', $button)

    return $button
}

newButton('Login', (button) => {
    button.style.cssText = `
        font-size: 50px;
        color: grey;
    `

    button.addEventListener('click', () => {
        console.log('hello - login')
    })

})

newButton('Signup', (button) => {
    button.style.cssText = `
        font-size: 50px;
        color: pink;
    `

    button.addEventListener('click', () => {
        console.log('hello - signup')
    })
})
