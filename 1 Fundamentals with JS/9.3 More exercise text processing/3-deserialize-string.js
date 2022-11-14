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
