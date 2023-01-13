function cookingByNumbers(...commandsArr) {

    num = Number(commandsArr.shift());
    const arrayLength = commandsArr.length;
    for (let i = 0; i < arrayLength; i++) {
        let currentCommand = commandsArr[i];

        switch (currentCommand) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
                break;
        }

    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:

// · chop - divide the number by two

// · dice - square root of a number

// · spice - add 1 to the number

// · bake - multiply number by 3

// · fillet - subtract 20% from the number

// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.

// The output should be printed on the console.