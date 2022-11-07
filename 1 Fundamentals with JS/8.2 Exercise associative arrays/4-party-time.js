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
    'tSzE5t0p', 'PARTY', 'Ce8vwPmE', 'SVQXQCbc'])