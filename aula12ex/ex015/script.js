function check() {
    var date = new Date()
    var year = date.getFullYear()
    var formyear = document.getElementById('txtyear')
    var res = document.getElementById('res')

    if (formyear.value.length == 0 || Number(formyear.value) > year) {
        window.alert('[ERROR] Check the data and try again')
        
    } else {
        var radiosex = document.getElementsByName('radsex')
        var age = year - Number(formyear.value)
        var gender = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'image')

        if (radiosex[0].checked) {
            gender = 'Male'
            if (age >= 0 && age < 10){
                // child
                img.setAttribute('src', 'img/child-m.webp')
            } else if (age < 21) {
                // young 
                img.setAttribute('src', 'img/young-m.webp')
            } else if (age < 50) {
                // adult
                img.setAttribute('src', 'img/adult-m.webp')                
            } else {
                // elderly
                img.setAttribute('src', 'img/elderly-m.webp')
            }

        } else if (radiosex[1].checked) {
            gender = 'Female'

            if (age >= 0 && age < 10){
                // child
                img.setAttribute('src', 'img/child-f.webp')
            } else if (age < 21) {
                // young 
                img.setAttribute('src', 'img/young-f.webp')
            } else if (age < 50) {
                // adult
                img.setAttribute('src', 'img/adult-f.webp')                
            } else {
                // elderly
                img.setAttribute('src', 'img/elderly-f.webp')
            }
        }

        res.innerHTML = `<p>Result: <strong>${gender}</strong>, <strong>${age}</strong> years old.</p>`
        res.appendChild(img)

    }
}