function problem1(input) {
    let adventureDays = Number(input.shift())
    let players = Number(input.shift())
    let groupEnergy = Number(input.shift())
    let waterPerDayForPerson = Number(input.shift())
    let foodPerDayForPerson = Number(input.shift())
    let inputLength = input.length
    let totalWater = players * waterPerDayForPerson * adventureDays;
    let totalFood = players * foodPerDayForPerson * adventureDays;
    let isEnergyLost = false
    let currentDay = 1


    for (let i = 0; i < inputLength; i++) {
        let lostEnergy = Number(input[i]);
        groupEnergy -= lostEnergy
        if (groupEnergy < 1) {
            isEnergyLost = true;
            break;
        }

        if (currentDay % 2 == 0) {
            groupEnergy *= 1.05;
            totalWater *= 0.7;
        }

        if (currentDay % 3 == 0) {
            totalFood -= (totalFood / players)
            groupEnergy *= 1.1;
        }

        currentDay++
    }
    if (!isEnergyLost) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}
problem1(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])

