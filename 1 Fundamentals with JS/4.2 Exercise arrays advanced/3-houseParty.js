function houseParty(array) {
    let guests = []
    for (let currentElement of array) {
        let tempArray = currentElement.split(' ')
        let currentGuest = tempArray[0]
        if (tempArray.length == 3) {
            if (!guests.includes(currentGuest)) {
                guests.push(currentGuest)
            } else {
                console.log(`${currentGuest} is already in the list!`);
            }
        } else {
            if (guests.includes(currentGuest)) {
                guests.splice(guests.indexOf(currentGuest), 1)
            } else {
                console.log(`${currentGuest} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])

// 3. House Party

// Write a function that keeps track of guests that are going to a house party.

// You will be given an array of strings. Each string will be one of the following:

// - "{name} is going!"

// - "{name} is not going!"

// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").

// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!").

// At the end print all the guests each on a separate line.