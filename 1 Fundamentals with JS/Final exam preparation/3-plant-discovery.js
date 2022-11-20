function plantDiscovery(input) {
    let plantList = {};
    // key is the name of the plant, value is array. 0 index = rarity and 1 index = rating.
    let plantsQty = Number(input.shift());

    for (let i = 0; i < plantsQty; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        if (!plantList[plant]) {
            plantList[plant] = [rarity];
        } else {
            // if plant exist just update the rarity who is at index 0 of value array.
            plantList[plant][0] = rarity;
        }
    }

    let data = input.shift();

    while (data != "Exhibition") {
        data = data.split(': ')
        let command = data.shift();

        switch (command) {
            case 'Rate':
                let [ratePlant, rate] = data[0].split(' - ');
                rate = Number(rate);

                if (plantList[ratePlant]) {

                    if (plantList[ratePlant][1] == null) {
                        // if rate doesent exist create it with current rate
                        plantList[ratePlant][1] = rate;
                    }
                    // sum old and new rate, devide it by 2 to get averege rate.
                    plantList[ratePlant][1] = (plantList[ratePlant][1] + rate) / 2;
                } else {
                    console.log('error');
                }
                break;

            case 'Update':
                let [updatePlant, newRarity] = data[0].split(' - ');
                newRarity = Number(newRarity);

                if (plantList[updatePlant]) {
                    plantList[updatePlant][0] = newRarity;
                } else {
                    console.log('error');
                }
                break;

            case 'Reset':
                let resetPlant = data.shift();
                if (plantList[resetPlant][1]) {
                    plantList[resetPlant].splice(1, 1);
                } else {
                    console.log('error');
                }
                break;
        }
        data = input.shift();
    }

    console.log('Plants for the exhibition:');

    for (const plant in plantList) {
        if (plantList[plant][1] == undefined) plantList[plant][1] = 0
        console.log(`- ${plant}; Rarity: ${plantList[plant][0]}; Rating: ${(plantList[plant][1]).toFixed(2)}`);
    }

}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);

//     You have now returned from your world tour. On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.

// On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. If you receive a plant more than once, update its rarity.

// After that, until you receive the command "Exhibition", you will be given some of these commands:

// · "Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)

// · "Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one

// · "Reset: {plant}" – remove all the ratings of the given plant

// Note: If any given plant name is invalid, print "error"

// After the command "Exhibition", print the information that you have about the plants in the following format:

// "Plants for the exhibition: - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}

// - {plant_name2}; Rarity: {rarity}; Rating: {average_rating} …

// - {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"

// The average rating should be formatted to the second decimal place.

// Input / Constraints

// · You will receive the input as described above

// · JavaScript: you will receive a list of strings

// Output

// · Print the information about all plants as described above