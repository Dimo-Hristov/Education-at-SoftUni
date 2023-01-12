function fruit(fruit, fruitGr, pricePerKg) {
    const fruitKg = fruitGr / 1000;
    const finalPrice = fruitKg * pricePerKg;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);

// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram.

// Print the following text on the console:

// `I need ${money} to buy {weight} kilograms {fruit}.`

// Print the weight and the money rounded to two decimal places.

// The input comes as three arguments passed to your function.

// The output should be printed on the console.