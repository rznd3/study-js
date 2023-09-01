function load() {
        
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var title = document.getElementById('title')
    var date = new Date
    var hour = 23 //date.getHours()

    msg.innerHTML = `Now it's ${hour} o'clock `

    if (hour >= 0 && hour < 12) {
        img.src = 'img/morning.webp'
        document.body.style.background = '#ebe8db'

    } else if (hour >= 12 && hour < 18) {
        img.src = 'img/afternoon.webp'
        document.body.style.background = '#311a02'
    } else {
        img.src = 'img/night.webp'
        document.body.style.background = '#492703'
    }

} 