function guineaPig(input) {
    let foodGr = Number(input[0]) * 1000;
    let hayGr = Number(input[1]) * 1000;
    let coverGr = Number(input[2]) * 1000;
    let pigWeightGr = Number(input[3]) * 1000;
    let counter = 1
    let isAllEnought = true;

    while (counter <= 30) {
        foodGr -= 300
        if (foodGr < 300) {
            isAllEnought = false;
            break;
        }

        if (counter % 2 == 0) {
            let fivePercentOfFood = (foodGr / 100) * 5
            if (hayGr >= fivePercentOfFood) {
                hayGr -= fivePercentOfFood
            } else {
                isAllEnought = false;
                break
            }

        }
        if (counter % 3 == 0) {
            let coverToDistract = pigWeightGr / 3
            if (coverGr >= coverToDistract) {
                coverGr -= coverToDistract
            } else {
                isAllEnought = false;
                break;
            }

        }
        counter++
    }
    let foodKg = foodGr / 1000
    let hayKg = hayGr / 1000
    let coverKg = coverGr / 1000

    if (isAllEnought) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }
}
guineaPig(["9",

    "5",

    "5.2",

    "1"])

//     Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest pet store and buys him everything he needs – food, hay, and cover.

// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.

// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.

// Calculate whether the quantity of food, hay, and cover, will be enough for a month.

// If Merry runs out of food, hay, or cover, stop the program!

// Input

// On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]

// On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]

// On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]

// On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]

// Output

// If the food, the hay, and the cover are enough, print:

// "Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."

// If one of the things is not enough, print:

// "Merry must go to the pet store!"

// The output values must be formatted to the second decimal place! 