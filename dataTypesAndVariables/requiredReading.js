function reading(bookPages, pagePerHour, daysForRead) {
    let sumOfRead = pagePerHour * daysForRead;
    let hoursPerDay = bookPages / sumOfRead;
    console.log(hoursPerDay);
}
reading(432, 15, 4);
