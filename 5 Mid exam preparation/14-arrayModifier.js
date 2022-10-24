function arrayModifier(input) {
    let array = input.shift().split(" ").map(Number);
    let currentRow = input.shift().split(" ");

    while (currentRow[0] != "end") {
        let command = currentRow[0];
        let index1 = Number(currentRow[1]);
        let index2 = Number(currentRow[2]);

        switch (command) {
            case "swap":
                [array[index1], array[index2]] = [array[index2], array[index1]];
                break;

            case "multiply":
                if (array[index1] && array[index2]) {
                    let number = array[index1];
                    let multiplyer = array[index2];
                    array[index1] = number * multiplyer;
                }
                break;

            case "decrease":
                for (let i = 0; i < array.length; i++) {
                    array[i] -= 1;
                }
                break;
        }
        currentRow = input.shift().split(" ");
    }
    console.log(array.join(", "));
}
arrayModifier([
    "1 2 3 4",
    "swap 0 1",
    "swap 1 2",
    "swap 2 3",
    "multiply 1 2",
    "decrease",
    "end",
])

// You are given an array with integers. Write a program to modify the elements after receiving the following commands:
// •	"swap {index1} {index2}" takes two elements and swap their places.
// •	"multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
// •	"decrease" decreases all elements in the array with 1.
// Input
// On the first input line, you will be given the initial array values separated by a single space.
// On the next lines you will receive commands until you receive the command "end". The commands are as follow:
// •	"swap {index1} {index2}"
// •	"multiply {index1} {index2}"
// •	"decrease"
// Output
// The output should be printed on the console and consist of elements of the modified array – separated by a comma and a single space ", ".
// Constraints
// •	Elements of the array will be integer numbers in the range [-231...231]
// •	Count of the array elements will be in the range [2...100]
// •	Indexes will be always in the range of the array

