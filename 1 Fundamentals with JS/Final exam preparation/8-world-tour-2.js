function tour(input) {
    let stops = input.shift();

    let currentLine = input.shift();

    while (currentLine != 'Travel') {
        currentLine = currentLine.split(':');
        let command = currentLine.shift();

        switch (command) {
            case 'Add Stop':
                let index = Number(currentLine.shift());
                let string = currentLine.shift();

                if (stops[index]) {
                    let firstString = stops.slice(0, index);
                    let lastString = stops.slice(index);
                    stops = firstString.concat(string, lastString);
                }
                console.log(stops);
                break;

            case 'Remove Stop':
                let startIndex = Number(currentLine.shift());
                let endIndex = Number(currentLine.shift());

                if (stops[startIndex] && stops[endIndex]) {
                    let stringToRemove = stops.slice(startIndex, endIndex + 1);
                    stops = stops.replace(stringToRemove, '');
                }
                console.log(stops);
                break;

            case 'Switch':
                let [oldString, newString] = currentLine;

                if (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString);
                }
                console.log(stops);
                break;
        }

        currentLine = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
tour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:AlbNaania:Azərbaycan",
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


