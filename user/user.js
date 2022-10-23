const person = {
    name: 'Eliot',
    age: 25
}

module.exports = {
    personInfo: person,
    greetThem() {
        console.log(`Sup ${this.personInfo.name}`)
    }
}