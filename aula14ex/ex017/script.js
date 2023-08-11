function mtable() {
    let n = document.getElementById('multiply')
    let table = document.getElementById("tabletxt")
    let hidden = document.getElementById('hidden')

    if (n.value.length == 0) {
        alert("Please enter a number")
    } else { 
        table.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            res = i * n.value;

            let option = document.createElement("option")
            option.setAttribute('id', i)
            option.setAttribute('value', `v${i}`)
            option.textContent = `${n.value} x ${i} = ${res}`

            table.appendChild(option)
        }
    }


    
}