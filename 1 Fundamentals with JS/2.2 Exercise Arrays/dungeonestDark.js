function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    let input = array[0];
    let roomCounter = 0;
    let isAllRooms = true;

    for (let index = 0; index <= input.length;) {
        z
        let room = "";
        roomCounter++;
        let symbol = input.charAt(index);
        index++;

        while (symbol != "|" && index <= input.length) {
            room += symbol;
            symbol = input.charAt(index);
            index++;
        }

        let action = "";
        let numberAsString = "";
        let number = 0;
        let roomIndex = 0;



        while (room.charAt(roomIndex) != " ") {
            action += room.charAt(roomIndex);
            roomIndex++;
        }

        let lastIndex = 0;
        if (room.charAt(roomIndex) == " ") {
            lastIndex = roomIndex + 1;
        }

        for (let i = lastIndex; i <= room.length; i++) {
            numberAsString += room.charAt(roomIndex);
            roomIndex++;
        }

        number = Number(numberAsString);

        if (action == "potion") {
            health += number;

            if (health > 100) {

                number = 100 - (health - number);
                health = 100;
            }

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (action == "chest") {

            coins += number;
            console.log(`You found ${number} coins.`);
            //console.log(coins);

        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${action}.`);
                //console.log(health);
            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomCounter}`);
                isAllRooms = false;
                break;
            }
        }

    }

    if (isAllRooms) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])