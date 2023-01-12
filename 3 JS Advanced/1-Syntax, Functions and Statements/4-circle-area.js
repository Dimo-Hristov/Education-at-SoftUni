function circleArea(arg) {
    let result;
    let inputType = typeof (arg);

    if (inputType == 'number') {
        result = (Math.PI * Math.pow(arg, 2)).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`;
    }

    console.log(result);
}
circleArea(5);
circleArea('hello');
circleArea([])

// Write a function that takes a single argument as an input. Check the type of input argument. If it is a number, assume it is the radius of a circle and calculate the circle area. Print the area rounded to two decimal places.

// If the argument type is NOT a number, print the following text on the console: `We can not calculate the circle area, because we receive a {type of argument}.`

// The input comes as a single argument passed to your function.

// The output should be printed on the console.