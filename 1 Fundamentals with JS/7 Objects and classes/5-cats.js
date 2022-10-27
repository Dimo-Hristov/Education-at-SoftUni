function cats(input) {
    class Cat {
        constructor(catName, catAge) {
            this.catName = catName,
                this.catAge = catAge
        }
        speak() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`)
        }
    }

    for (const line of input) {
        let currentInfo = line.split(' ')
        let catName = currentInfo[0];
        let catAge = currentInfo[1];
        let cat = new Cat(catName, catAge)
        cat.speak(cat)
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])


