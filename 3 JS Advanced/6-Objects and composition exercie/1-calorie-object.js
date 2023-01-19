function calorieObject(arr) {
    return arr.reduce((acc, element, index) => {
        if (index % 2 === 0) {
            acc[element] = Number(arr[index + 1]);
            return acc
        }


    }, {})
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log('------------');
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));