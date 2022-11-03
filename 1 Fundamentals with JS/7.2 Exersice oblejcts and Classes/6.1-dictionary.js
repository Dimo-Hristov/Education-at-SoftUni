function makeDictionary(inputJSON) {
    // make empty object
    let base = {};

    for (let el of inputJSON) {
        let currentObj = JSON.parse(el);
        //merge all into first-empty
        Object.assign(base, currentObj)
    }
    // getting keys in object to array
    let dictionary = Object.keys(base);

    //sort alphabetically
    dictionary.sort((a, b) => a.localeCompare(b));

    //print output
    dictionary.forEach(key => console.log(`Term: ${key} => Definition: ${base[key]}`));

}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])