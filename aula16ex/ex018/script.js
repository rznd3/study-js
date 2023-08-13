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
    res.innerHTML = ''
}


function info() {
    if (list.length != 0) {

        list = list.sort(function(a, b){return a-b})
        let total = Number(list.length)
        let bigger =  list[Number(total - 1)]
        let smaller = list[0]
        let sum = 0
        
        //sum
        for (let i in list) {
            sum += list[i]
        }

        //average
        let average = sum / total
        
        //print result
        res.innerHTML += `<p>We have ${total} numbers registered</p>`
        res.innerHTML += `<p>The biggest number is ${bigger}</p>`
        res.innerHTML += `<p>The smallest number is ${smaller}</p>`
        res.innerHTML += `<p>The sum of the values is equal to ${sum}</p>`
        res.innerHTML += `<p>The average of the values is equal to ${average}</p>`

    } else {
        alert('Add values before finalizing')
    }


}