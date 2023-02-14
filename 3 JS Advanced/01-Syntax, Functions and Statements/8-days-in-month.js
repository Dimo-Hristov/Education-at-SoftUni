function daysInMonth(month, year) {
    let daysInMonth = new Date(year, month, 0).getDate();

    console.log(daysInMonth);

}
daysInMonth(2, 2022);

// Write a JavaScript function to get the number of days in a month.

// The input comes as two numeric parameters. The first element is the month, the second is the year.

// The output must return the number of days in a month for a given year.

// Hints

// · Use Date()