function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let array = input.split("|");
    let isFailed = false;
    let bestRoom = 1;

    for (const element of array) {
        let currentRow = element.split(" ");
        let command = currentRow[0];

        switch (command) {
            case "potion":
                let healGain = Number(currentRow[1]);
                let oldHealth = health;
                health += healGain;
                if (health > 100) {
                    healGain = Math.abs(oldHealth - 100);
                    health = 100;
                }
                console.log(`You healed for ${healGain} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                let bitcoinsFound = Number(currentRow[1]);
                bitcoins += bitcoinsFound;
                console.log(`You found ${bitcoinsFound} bitcoins.`);
                break;
            default:
                let monster = currentRow[0];
                let monsterAttack = Number(currentRow[1]);
                health -= monsterAttack;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${bestRoom}`);
                    isFailed = true;
                    break;
                }
        }
        if (isFailed) {
            break;
        }
        bestRoom++;
    }
    if (!isFailed) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// •	"potion"
// o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp."
// o	After that, print your current health: "Current health: {health} hp."
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health.
// o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines:
// "You've made it!"
// "Bitcoins: {bitcoins}"
// "Health: {health}"
// Input / Constraints
// You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".
// Output
// Print the corresponding messages described above.
