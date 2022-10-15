function listOfProduct(arr) {
    let alphabeticalSort = arr.sort()
    let counter = 1;

    for (const tempElement of alphabeticalSort) {
        console.log(counter + '.' + tempElement);
        counter++
    }
}
listOfProduct(['Potatoes', 'Tomates', 'Onions', 'Apples'])