function addAndRemove(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            output.push(i + 1)
        } else {
            output.pop()
        }

    }
    if (output.length <= 0) {
        console.log('Empty');
    } else {
        console.log(output.join(' '));
    }

}
addAndRemove(['add', 'add', 'remove', 'remove', 'remove'])