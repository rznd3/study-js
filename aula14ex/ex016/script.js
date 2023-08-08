function count() {
    let start = document.querySelector('input#start')
    let end = document.querySelector('input#end')
    let step = document.querySelector('input#step')
    let res = document.querySelector('div#res')

    res.innerHTML = ''

    if (step.value == 0){
        alert("Invalid step. Let's consider Step = 1")
        step.value = 1
    }

    if (start.value.length == 0 || end.value.length == 0) {
        res.innerHTML = '<p>Impossible to count</p>'

    } else {
        if (start.value < end.value) {
            for (let i = Number(start.value); i <= Number(end.value); i += Number(step.value)) {
                res.innerHTML += `${i} ` + '&#128073 '
            }
    
        } else {  
            for (let i = Number(start.value); i >= Number(end.value); i -= Number(step.value)) {
                res.innerHTML += `${i} ` + '&#128073 '
            }
    
        }

        res.innerHTML += '&#127988'

    }

}