function plantDiscovery(input) {
    let plantList = {};
    let totalPlants = Number(input.shift());

    plantGenerator(input, totalPlants);

    let data = input.shift();

    while (data !== 'Exhibition') {
        data = data.split(': ');
        let command = data.shift();

        switch (command) {
            case 'Rate':
                let [ratePlant, rating] = data.shift().split(' - ');
                rating = Number(rating)
                if (plantList[ratePlant]) {
                    if (plantList[ratePlant].rating == 0) {
                        plantList[ratePlant].rating = rating
                    }
                    plantList[ratePlant].rating = (plantList[ratePlant].rating + rating) / 2
                } else {
                    console.log('error');
                }
                break;

            case 'Update':
                let [updatePlant, newRarity] = data.shift().split(' - ');
                if (plantList[updatePlant]) {
                    plantList[updatePlant].rarity = newRarity;
                } else {
                    console.log('error');
                }
                break;

            case 'Reset':
                let resetPlant = data.shift();
                if (plantList[resetPlant]) {
                    plantList[resetPlant].rating = 0;
                } else {
                    console.log('error');
                }
                break;
        }
        data = input.shift();
    }


    console.log('Plants for the exhibition:');

    for (const plant in plantList) {
        console.log(`- ${plant}; Rarity: ${plantList[plant].rarity}; Rating: ${(plantList[plant].rating).toFixed(2)}`);
    }

    function plantGenerator(input, totalPlants) {

        for (let i = 0; i < totalPlants; i++) {
            let [plant, rarity] = input.shift().split('<->');
            rarity = Number(rarity);
            let rating = 0;
            if (!plantList[plant]) {
                plantList[plant] = { rarity, rating };
            } else {
                plantList[plant].rarity = '';
            }

        }
    }
}
plantDiscovery(["3", "Arnoldii<->4", "Woodii<->7", "Welwitschia<->2", "Rate: Woodii - 10",
    "Rate: Welwitschia - 7", "Rate: Arnoldii - 3", "Rate: Woodii - 5", "Update: Woodii - 5",
    "Reset: Arnoldii", "Exhibition"]);


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