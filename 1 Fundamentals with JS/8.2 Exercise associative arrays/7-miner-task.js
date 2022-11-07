function minerTask(input) {
    let resourcesList = {};
    const inputLength = input.length

    // every odd index represending resouce and every even represending quantity.
    for (let index = 0; index < inputLength; index += 2) {
        const resourceType = input[index];
        const qty = Number(input[index + 1]);
        // check if the resouce exist in the list, if doesen't create it with the given quantity.
        // if exist just add the new quanity.
        if (!resourcesList[resourceType]) {
            resourcesList[resourceType] = qty;
        } else {
            resourcesList[resourceType] += qty
        }
    }
    // print all resources with the sum of quanity.
    for (const resouce in resourcesList) {
        console.log(`${resouce} -> ${resourcesList[resouce]}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])

//     You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line.

// Print the resources and their quantities in the format:

// {resource} –> {quantity}

// The quantities inputs will be in the range [1 … 2 000 000 000].