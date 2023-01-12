function fruit(fruit, fruitGr, pricePerKg) {
    const fruitKg = fruitGr / 1000;
    const finalPrice = fruitKg * pricePerKg;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)