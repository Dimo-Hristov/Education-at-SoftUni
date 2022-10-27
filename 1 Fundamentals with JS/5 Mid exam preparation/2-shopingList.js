function shopingList(input) {
    let shopingList = input.shift().split("!");
    let index = 0
    let currentElement = input[index++]


    while (currentElement != 'Go Shopping!') {
        let currentElementToArray = currentElement.split(' ')
        let command = currentElementToArray[0];
        let item = currentElementToArray[1];
        let itemToAdd = currentElementToArray[2]; // if command is 'Correct'

        switch (command) {
            case "Urgent":
                if (!shopingList.includes(item)) {
                    shopingList.unshift(item);
                }
                break;

            case "Unnecessary":
                let indexToRemove = shopingList.indexOf(item);
                if (indexToRemove > -1) {
                    shopingList.splice(indexToRemove, 1);
                }
                break;

            case "Correct":
                let indexToReplace = shopingList.indexOf(item);
                if (indexToReplace > -1) {
                    shopingList.splice(indexToReplace, 1, itemToAdd);
                }
                break;

            case "Rearrange":
                let indexToRearrange = shopingList.indexOf(item);
                if (indexToRearrange > -1) {
                    shopingList.splice(indexToRearrange, 1);
                    shopingList.push(item);
                }
                break;
        }
        currentElement = input[index++]
    }
    console.log(shopingList.join(', '));
}
shopingList((["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Milk",

    "Correct Pepper Onion", "Rearrange kur", "Correct Tomatoes Potatoes", "Go Shopping!"]));
