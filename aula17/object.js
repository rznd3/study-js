let friend = {
    name: 'John',
    gender: 'male',
    weight: 88.5,
    fatten(w=0){
        console.log('Fed up')
        this.weight += w
    }
}

friend.fatten(5)
console.log(`${friend.name} weighs ${friend.weight}Kg`)