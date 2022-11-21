function pirates(input) {
    let townList = {};

    targetsCreator(input);
    commandsExecutor(input);

    let remainingCities = Object.values(townList).length;

    if (remainingCities > 0) {
        console.log(`Ahoy, Captain! There are ${remainingCities} wealthy settlements to go to:`);
        for (const town in townList) {
            console.log(`${town} -> Population: ${townList[town].population} citizens, Gold: ${townList[town].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

    function commandsExecutor(input) {
        let data = input.shift();

        while (data !== 'End') {
            data = data.split('=>');
            let command = data.shift();

            switch (command) {
                case 'Plunder':
                    let [town, killedPeople, stolenGold] = data;
                    killedPeople = Number(killedPeople);
                    stolenGold = Number(stolenGold);

                    if (townList[town]) {
                        townList[town].population -= killedPeople;
                        townList[town].gold -= stolenGold;
                        console.log(`${town} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);
                    }

                    if (townList[town].gold < 1 || townList[town].population < 1) {
                        delete townList[town];
                        console.log(`${town} has been wiped off the map!`);
                    }
                    break;

                case 'Prosper':
                    let [prosperTown, goldToAdd] = data;
                    goldToAdd = Number(goldToAdd);

                    if (goldToAdd < 0) {
                        console.log(`Gold added cannot be a negative number!`);
                    }

                    if (goldToAdd >= 0 && townList[prosperTown]) {
                        townList[prosperTown].gold += goldToAdd;
                        console.log(`${goldToAdd} gold added to the city treasury. ${prosperTown} now has ${townList[prosperTown].gold} gold.`);
                    }
                    break;
            }

            data = input.shift();
        }

    }

    function targetsCreator(input) {
        let command = input.shift();

        while (command !== 'Sail') {
            let [town, population, gold] = command.split('||');
            population = Number(population);
            gold = Number(gold);

            if (!townList[town]) {
                townList[town] = { population, gold };
            } else {
                townList[town].population += population;
                townList[town].gold += gold;
            }
            command = input.shift();
        }
    }

}
pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]);

// Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack Daniels. Together with your comrades Jim (Beam) and Johnny (Walker), you have been roaming the seas, looking for gold and treasure… and the occasional killing, of course. Go ahead, target some wealthy settlements and show them the pirate's way!

// Until the "Sail" command is given, you will be receiving:

// · You and your crew have targeted cities, with their population and gold, separated by "||".

// · If you receive a city that has already been received, you have to increase the population and gold with the given values.

// After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given.

// Events will be in the following format:

// · "Plunder=>{town}=>{people}=>{gold}"

// o You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.

// o For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."

// o If any of those two values (population or gold) reaches zero, the town is disbanded.

// § You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"

// o There will be no case of receiving more people or gold than there is in the city.

// · "Prosper=>{town}=>{gold}"

// o There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.

// o The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.

// o If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message:

// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input

// · On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||"

// · On the following lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>"

// Output

// · After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:

// "Ahoy, Captain! There are {count} wealthy settlements to go to:

// {town1} -> Population: {people} citizens, Gold: {gold} kg

// {town2} -> Population: {people} citizens, Gold: {gold} kg

// …

// {town…n} -> Population: {people} citizens, Gold: {gold} kg"

// · If there are no settlements left to plunder, print:

// "Ahoy, Captain! All targets have been plundered and destroyed!"

// Constraints

// · The initial population and gold of the settlements will be valid 32-bit integers, never negative, or exceed the respective limits.

