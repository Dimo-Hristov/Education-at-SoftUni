function price(yield) {
    let totalExtract = 0;
    const workersConsumePerDay = 26;
    let days = 0;

    while (yield >= 100) {
        totalExtract += yield;
        yield -= 10;
        days++
        if (totalExtract >= workersConsumePerDay) {
            totalExtract -= workersConsumePerDay
        } else {
            break;
        }

    }
    totalExtract -= workersConsumePerDay /// abandonation fee
    if (totalExtract < 0) {
        totalExtract = 0
    }
    console.log(`${days}\n${totalExtract}`);
}
price(45)