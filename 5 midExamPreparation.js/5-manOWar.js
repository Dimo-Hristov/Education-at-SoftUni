function manOWar(input) {
    let pirateShipStatus = input.shift().split(">").map(Number);
    let warShipStatus = input.shift().split(">").map(Number);
    let maxHealthPerSelection = Number(input.shift());
    let currentLane = input.shift().split(" ");
    let isPiratesWin = false;
    let isWarShipDetroyedPirates = false;

    while (currentLane[0] != "Retire") {
        let command = currentLane[0];

        switch (command) {
            case "Fire":
                fire(currentLane);
                break;
            case "Defend":
                defend(currentLane);
                break;
            case "Repair":
                repair(currentLane);
                break;
            case "Status":
                status(currentLane);
                break;
        }

        if (isPiratesWin) {
            break;
        }
        if (isWarShipDetroyedPirates) {
            break;
        }

        currentLane = input.shift().split(" ");
    }

    if (!isPiratesWin && !isWarShipDetroyedPirates) {
        let pirateShipSum = pirateShipStatus.reduce((total, arg) => total + arg, 0);
        let warShipSum = warShipStatus.reduce((total, arg) => total + arg, 0);
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }

    function defend(arr) {
        let startIndex = Number(currentLane[1]);
        let endIndex = Number(currentLane[2]);
        let warShipDamage = Number(currentLane[3]);

        if (pirateShipStatus[startIndex] && pirateShipStatus[endIndex]) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShipStatus[i] -= warShipDamage;
                if (pirateShipStatus[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    isWarShipDetroyedPirates = true;
                    break;
                }
            }
        }
    }
    function repair(arr) {
        let indexToRepair = Number(currentLane[1]);
        let healthToAdd = Number(currentLane[2]);
        if (pirateShipStatus[indexToRepair]) {
            pirateShipStatus[indexToRepair] += healthToAdd;
            if (pirateShipStatus[indexToRepair] > maxHealthPerSelection) {
                pirateShipStatus[indexToRepair] = maxHealthPerSelection;
            }
        }
    }
    function status(arr) {
        let healthBorder = (maxHealthPerSelection / 100) * 20;

        let selectionToRepair = pirateShipStatus.filter((x) => x < healthBorder);
        console.log(`${selectionToRepair.length} sections need repair.`);
    }
    function fire(arr) {
        let index = Number(currentLane[1]);
        let piratesDamage = Number(currentLane[2]);
        if (warShipStatus[index]) {
            warShipStatus[index] -= piratesDamage;
            if (warShipStatus[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                isPiratesWin = true;
            }
        }
    }
}
manOWar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire",
]);

// The pirates encounter a huge Man-O-War at sea.
// Create a program that tracks the battle and either chooses a winner or prints a stalemate. On the first line, you will receive the status of the pirate ship, which is a string representing integer sections separated by ">". On the second line, you will receive the same type of status, but for the warship:
// "{section1}>{section2}>{section3}… {sectionn}"
// On the third line, you will receive the maximum health capacity a section of the ship can reach.
// The following lines represent commands until "Retire":
// •	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."
// •	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
// "You lost! The pirate ship has sunken."
// •	"Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not, skip the command. The health of the section cannot exceed the maximum health capacity.
// •	"Status" - prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. Print the following:
// "{count} sections need repair."
// In the end, if a stalemate occurs, print the status of both ships, which is the sum of their individual sections, in the following format:
// "Pirate ship status: {pirateShipSum}
// Warship status: {warshipSum}"
// Input
// •	On the 1st line, you are going to receive the status of the pirate ship (integers separated by '>')
// •	On the 2nd line, you are going to receive the status of the warship
// •	On the 3rd line, you will receive the maximum health a section of a ship can reach.
// •	On the following lines, until "Retire", you will be receiving commands.
// Output
// •	Print the output in the format described above.
