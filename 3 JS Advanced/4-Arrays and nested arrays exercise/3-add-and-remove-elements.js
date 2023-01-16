function addAndremove(commands) {
    const result = [];
    const commandsLength = commands.length

    for (let i = 0; i < commandsLength; i++) {
        const currentCommand = commands[i];
        switch (currentCommand) {
            case 'add':
                result.push(i + 1);
                break;
            case 'remove':
                result.pop();
                break;
        }
    }

    if (result.length < 1) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
addAndremove(['add', 'add', 'add', 'add']);
console.log('---------');
addAndremove(['add', 'add', 'remove', 'add', 'add']);
console.log('---------');
addAndremove(['remove', 'remove', 'remove']);

// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove".

// The initial number is 1. Each input command should increase that number, regardless of what it is. Upon receiving an "add" command you should add the current number to your array. Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.

// The input comes as an array of strings. Each element holds a command.

// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".