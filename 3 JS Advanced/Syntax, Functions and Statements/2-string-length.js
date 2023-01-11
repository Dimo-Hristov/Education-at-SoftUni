function stringLength(arg1, arg2, arg3) {

    let lengthSum = arg1.length + arg2.length + arg3.length;
    let averegeLength = lengthSum / 3;

    console.log(lengthSum);
    console.log(Math.floor(averegeLength));

}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');

//Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.

// The input comes as three string arguments passed to your function.

// The output should be printed on the console in two lines.