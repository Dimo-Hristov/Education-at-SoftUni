function activationKeys(input) {
    let activationKey = input.shift();

    let data = input.shift();

    while (data !== "Generate") {
        let dataArr = data.split(">>>");
        let command = dataArr[0];

        switch (command) {
            case "Contains":
                contains(dataArr);
                break;

            case "Flip":
                flip(dataArr);
                break;

            case "Slice":
                slice(dataArr);
                break;
        }
        data = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);

    function contains(dataArr) {
        let substring = dataArr[1];

        if (activationKey.indexOf(substring) > -1) {
            console.log(`${activationKey} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }
    }
    function flip(dataArr) {
        let uperOrLower = dataArr[1];
        let startIndex = Number(dataArr[2]);
        let endIndex = Number(dataArr[3]);

        let textToModify = activationKey.slice(startIndex, endIndex);
        let modifiedText = "";

        if (uperOrLower == "Upper") {
            modifiedText = textToModify.toUpperCase();
        } else {
            modifiedText = textToModify.toLowerCase();
        }

        activationKey = activationKey.replace(textToModify, modifiedText);

        console.log(activationKey);
    }
    function slice(dataArr) {
        let startindex = dataArr[1];
        let endindex = dataArr[2];

        let firstString = activationKey.slice(0, startindex);
        let secondString = activationKey.slice(endindex);

        let updatedKey = firstString.concat(secondString);
        activationKey = updatedKey;

        console.log(activationKey);
    }
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
]);

// You are about to make some good money, but first, you need to think of a way to verify who paid for your product and who didn't. You have decided to let people use the software for a free trial period and then require an activation key to continue using the product. Before you can cash out, the last step is to design a program that creates unique activation keys for each user. So, waste no more time and start typing!

// The first line of the input will be your raw activation key. It will consist of letters and numbers only.

// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.

// There are several types of instructions, split by ">>>":

// · "Contains>>>{substring}":

// o If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".

// o Otherwise, prints: "Substring not found!"

// · "Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":

// o Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.

// o All given indexes will be valid.

// · "Slice>>>{startIndex}>>>{endIndex}":

// o Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.

// o Both indices will be valid.

// Input

// · The first line of the input will be a string consisting of letters and numbers only.

// · After the first line, until the "Generate" command is given, you will be receiving strings.

// Output

// · After the "Generate" command is received, print:

// o "Your activation key is: {activation key}"
