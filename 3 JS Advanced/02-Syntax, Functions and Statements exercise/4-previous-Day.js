function previousDay(year, month, day) {

    const previousDay = new Date(year, month - 1, day - 1)
    const newYear = previousDay.getFullYear();
    const newMonth = previousDay.getMonth() + 1;
    const newDay = previousDay.getDate();


    const output = `${newYear}-${newMonth}-${newDay}`

    console.log(output);
}
previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
previousDay(2015, 1, 1);

// Write a JS function that calculates the date of the previous day by given year, month, and day.

// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.

// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`