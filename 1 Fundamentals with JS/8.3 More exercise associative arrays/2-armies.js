function armies(input) {
    let armiesList = {};
    // read the input and make a list, notice all the conditions from every command
    for (const row of input) {
        if (row.includes('arrives')) {
            let leader = row.split(' arrives').shift();
            armiesList[leader] = { 'total': 0 };
        } else if (row.includes('+')) {
            const information = row.split(' + ');
            const armyToAddSolders = information[0];
            const qty = Number(information[1]);
            for (const leader in armiesList) {
                if (armiesList[leader][armyToAddSolders]) {
                    armiesList[leader]['total'] += qty
                    armiesList[leader][armyToAddSolders] += qty
                }
            }
        } else if (row.includes('defeated')) {
            const defeatedLeader = row.split(' defeated')[0]
            if (armiesList[defeatedLeader]) {
                delete armiesList[defeatedLeader];
            }
        } else {
            const leader = row.split(': ').shift();
            if (armiesList[leader]) {
                const detailsLeft = row.split(leader + ': ')[1].split(', ');
                const armyName = detailsLeft[0];
                const armySolders = Number(detailsLeft[1]);
                armiesList[leader]['total'] += armySolders
                armiesList[leader][armyName] = armySolders;
            }
        }
    }
    // make the list kvp
    kvp = Object.entries(armiesList);
    // make every second index to kvp
    for (let i = 0; i < kvp.length; i++) {
        let kvpArmies = Object.entries(kvp[i][1]);
        kvp[i][1] = []
        kvp[i][1] = kvpArmies
    }
    // sort the leaders by total army count in descending.
    kvp.sort((a, b) => b[1][0][1] - a[1][0][1])
    // sort each army by count in descending.
    for (const leaders of kvp) {
        leaders[1].sort((a, b) => b[1] - a[1])
    }
    // print in requred format
    for (const leader of kvp) {
        console.log(`${leader[0]}: ${leader[1][0][1]}`);
        for (const army of leader[1]) {
            if (!army.includes('total')) {
                console.log(`>>> ${army.join(' - ')}`);
            }
        }
    }
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);

//     Write a function that stores information about an army leader and his armies. The input will be an array of strings. The strings can be in some of the following formats: "{leader} arrives" – add the leader (no army)

// "{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists) "{army name} + {army count}" – if the army exists somewhere add the count "{leader} defeated" – delete the leader and his army (if he exists)

// When finished reading the input sort the leaders by total army count in descending. Then each army should be sorted by count in descending.

// Output

// Print in the following format: "{leader one name}: {total army count} >>> {armyOne name} - {army count} >>> {armyTwo name} - {army count} … {leader two name}: {total army count} …"

// Constrains

// · The new leaders will always be unique

// · When adding a new army to the leader, the army will be uniqu