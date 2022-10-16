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