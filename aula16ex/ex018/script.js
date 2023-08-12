let num = document.querySelector('input#addnumber')
let table = document.querySelector('select#tabletxt')
let res = document.querySelector('div#res')
let list = []

function isnumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
       return true 
    } else {
        return false
    }
}

function inlist(n, l) {
     if (l.indexOf(Number(n)) != -1) {
        return true
     } else {
        return false
     }
}

function add() {
    if (isnumber(num.value) && !inlist(num.value, list)) {
        
        list.push(Number(num.value))
        
        let option = document.createElement('option')
        option.setAttribute('value', num.value)
        option.setAttribute('id', num.value)
        option.text = `${num.value} added`
        table.appendChild(option)
    } else {
    alert('Value invalid or already added in the list')
    }

    num.value = ''
    num.focus()
}
