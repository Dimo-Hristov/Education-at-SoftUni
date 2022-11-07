function partyTime(input) {
    let guestList = {
        'vip': [],
        'regular': []
    };
    let command = input.shift();

    while (command != 'PARTY') {
        let guest = command;
        if (isNaN(guest[0])) {
            guestList['regular'].push(guest);
        } else {
            guestList['vip'].push(guest)
        }
        command = input.shift();
    }

    for (const arrivedGuest of input) {
        if (isNaN(arrivedGuest[0])) {
            let indextoRemove = guestList['regular'].indexOf(arrivedGuest);
            if (indextoRemove > -1) {
                guestList['regular'].splice(indextoRemove, 1);
            }

        } else {
            let indextoRemove = guestList['vip'].indexOf(arrivedGuest);
            if (indextoRemove > -1) {
                guestList['vip'].splice(indextoRemove, 1);
            }

        }
    }

    let missingGuest = guestList['vip'].length + guestList['regular'].length;
    console.log(missingGuest);
    console.log(guestList['vip'].join('\n'));
    console.log(guestList['regular'].join('\n'));
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])

//     4. Party Time

// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists.

// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".

// All VIP numbers start with a digit.

// When you receive the command "PARTY", the guests start coming.

// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

// Hint: Guest names are not unique. Only the first match is removed when receiving a name.