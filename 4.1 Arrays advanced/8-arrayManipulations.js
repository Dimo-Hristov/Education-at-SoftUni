function manipulations(arr) {
    let arrayToManipulate = arr.shift().split(" ").map(Number);
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentCommand = arr[i].split(" ");

        switch (currentCommand[0]) {
            case "Add":
                add(currentCommand);
                break;
            case "Remove":
                remove(currentCommand);
                break;
            case "RemoveAt":
                removeAt(currentCommand);
                break;
            case "Insert":
                insert(currentCommand);
                break;
        }

    }

    function add(currentCommand) {
        return arrayToManipulate.push(Number(currentCommand[1]));
    }
    function remove(currentCommand) {
        let numToRemove = Number(currentCommand[1]);
        return (arrayToManipulate = arrayToManipulate.filter(
            (x) => x != numToRemove
        ));
    }
    function removeAt(currentCommand) {
        let indexToRemove = Number(currentCommand[1]);
        return arrayToManipulate.splice(indexToRemove, 1);
    }
    function insert(currentCommand) {
        let numberToInsert = Number(currentCommand[1]);
        let indexToInsert = Number(currentCommand[2]);
        return arrayToManipulate.splice(indexToInsert, 0, numberToInsert);
    }
    console.log(arrayToManipulate.join(" "));
}
manipulations([
    "6 12 2 65 6 42",

    "Add 8",

    "Remove 12",

    "RemoveAt 3",

    "Insert 6 2",
]);

    'Insert 6 2'])