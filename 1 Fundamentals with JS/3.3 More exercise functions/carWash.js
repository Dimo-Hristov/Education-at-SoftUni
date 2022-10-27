function carWash(array) {
    let cleanPercent = 0;
    let arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        if (array[i] == 'soap') {
            cleanPercent += 10
        } else if (array[i] == 'water') {
            cleanPercent *= 1.2
        } else if (array[i] == 'vacuum cleaner') {
            cleanPercent *= 1.25
        } else {
            cleanPercent *= 0.9
        }
    }
    console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])