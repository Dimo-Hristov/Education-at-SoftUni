function carFactory({ model, power, color, carriage, wheelsize }) {
    const engineTypes = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    if (wheelsize % 2 === 0) wheelsize--;

    let engine = "";
    if (power <= 90) {
        engine = engineTypes.smallEngine;
    } else if (power <= 120) {
        engine = engineTypes.normalEngine;
    } else {
        engine = engineTypes.monsterEngine;
    }

    const car = {
        model,
        engine,
        carriage: { type: carriage, color },
        wheels: Array(4).fill(wheelsize),
    };

    return car
}

console.log(
    carFactory({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    })
);


// Write a program that assembles a car by giving requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfill the client’s order. You have the following parts in storage:

// An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.

// Small engine: { power: 90, volume: 1800 }

// Normal engine: { power: 120, volume: 2400 }

// Monster engine: { power: 200, volume: 3500 }

// A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint them any color.

// Hatchback: { type: 'hatchback', color: <as required> }

// Coupe: { type: 'coupe', color: <as required> }

// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number.

// Input

// You will receive an object as an argument to your function. The format will be as follows:

// { model: <model name>,

// power: <minimum power>,

// color: <color>,

// carriage: <carriage type>,

// wheelsize: <size> }

// Output

// Return the resulting car object as a result of your function. See the examples for details.
