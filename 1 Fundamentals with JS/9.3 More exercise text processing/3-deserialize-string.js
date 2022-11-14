function deserializeString(input) {
    let text = [];
    let command = input.shift();

    while (command != "end") {
        command = command.split(":");
        // at 0 index is the letter, at 1 index is the list of indexes to add the letter.
        let letterToAdd = command[0];
        let indexesArray = command[1].split("/").map(Number);

        for (const index of indexesArray) {
            text[index] = letterToAdd;
        }
        command = input.shift();
    }

    console.log(text.join(""));
}
deserializeString([
    "a:0/3/5/11",
    "v:1/4",
    "j:2",
    "m:6/9/15",
    "s:7/13",
    "d:8/14",
    "c:10",
    "l:12",
    "end",
]);

// Write a function, which takes the output from the previous task and turns it back into a string.

// Until you receive the line “end”, you will receive several lines of input on the console, in the following format:

// · "{letter}:{index1}/{index2}/{index…}/{indexN}"

// Your task is to take every letter and its index and form a string out of them.
