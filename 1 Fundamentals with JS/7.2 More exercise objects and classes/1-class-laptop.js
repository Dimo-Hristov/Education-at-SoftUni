class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false
        this.quality = quality
        this.price = 800 - (this.info.age * 2) + (this.quality * 0.5)
    }
    turnOn() {
        this.isOn = true
        this.quality -= 1
        this.price = 800 - (this.info.age * 2) + (this.quality * 0.5)
    }
    turnOff() {
        this.isOn = false
        this.quality -= 1
        this.price = 800 - (this.info.age * 2) + (this.quality * 0.5)
    }
    showInfo() {
        return JSON.stringify(this.info)
    }
}

let info = {
    producer: "Dell",

    age: 2, brand: "XPS"
}

let laptop = new Laptop(info, 10)

laptop.turnOn()

console.log(laptop.showInfo())

laptop.turnOff()

console.log(laptop.quality)

laptop.turnOn()

console.log(laptop.isOn)

console.log(laptop.price)


// Create a class Laptop that has the following properties:

// · info – object that contains:

// o producer – string

// o age – number

// o brand – string

// · isOn – boolean (false by default)

// · turnOn – a function that sets the isOn variable to true

// · turnOff – a function that sets the isOn variable to false

// · showInfo – a function that returns the producer, age, and brand as JSON

// · quality – number (every time the laptop is turned on/off the quality decreases by 1)

// · getter price – number (800 – {age * 2} + (quality * 0.5))

// The constructor should receive the info as an object and the quality.