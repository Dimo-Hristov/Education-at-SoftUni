function elements(arr1, arr2) {
    for (array1Elements of arr1) {
        if (arr2.includes(array1Elements)) {
            console.log(array1Elements);
        }
    }




    //   Hard way

    //     for (let i = 0; i < arr1.length; i++) {
    //         let arr1TempElement = arr1[i];
    //         for (let i = 0; i < arr2.length; i++) {
    //             let arr2TempElement = arr2[i]
    //             if (arr1TempElement === arr2TempElement) {
    //                 console.log(arr1TempElement);
    //             }
    //         }
    //     }

}
elements
    (['Hey', 'hello', 2, 4, 'Peter', 'e']
        , ['Petar', 10, 'hey', 4, 'hello', '2'])