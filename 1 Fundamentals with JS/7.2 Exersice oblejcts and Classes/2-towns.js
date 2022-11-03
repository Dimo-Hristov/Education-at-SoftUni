function towns(input) {
    const townList = [];

    input.forEach(currentRow => {
        const array = currentRow.split(' | ');
        const town = array[0];
        const latitude = Number(array[1]).toFixed(2)
        const longitude = Number(array[2]).toFixed(2)
        const obj = {
            town,
            latitude,
            longitude
        }
        townList.push(obj);
    })

    townList.forEach(town => console.log(town))
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])

//     2. Towns

// You’re tasked to create and print objects from a text table.

// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.

// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.

// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!