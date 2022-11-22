function worldtour(input) {
    let stops = input.shift();

    let data = input.shift();

    while (data != 'Travel') {
        data = data.split(':');
        let command = data.shift();

        switch (command) {
            case 'Add Stop':
                let [index, textToAdd] = data;
                index = Number(index);

                if (stops[index] != undefined) {
                    let beginingText = stops.slice(0, index);
                    let endText = stops.slice(index);
                    stops = beginingText.concat(textToAdd, endText);
                }
                console.log(stops);
                break;


            case 'Remove Stop':
                let [startIndex, endindex] = data;
                startIndex = Number(startIndex);
                endindex = Number(endindex);

                if (stops[startIndex] && stops[endindex]) {
                    let firstString = stops.slice(0, startIndex);
                    let secondString = '';

                    if (stops[endindex + 1]) {
                        secondString = stops.slice(endindex + 1);
                    }
                    stops = firstString.concat(secondString);
                }
                console.log(stops);
                break;

            case 'Switch':
                let [changeFrom, changeTo] = data;

                if (stops.includes(changeFrom)) {
                    stops = stops.replace(changeFrom, changeTo);
                }
                console.log(stops);
                break;

        }
        data = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldtour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);


//     You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
// Note: After each command, print the current state of the string if it is valid!
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
// Input / Constraints
// •	JavaScript: you will receive a list of strings
// •	An index is valid if it is between the first and the last element index (inclusive) (0 ….. Nth) in the sequence.
// Output
// •	Print the proper output messages in the proper cases as described in the problem description



