function price(yield) {
    let totalExtract = 0;
    const workersConsumePerDay = 26;
    let days = 0;

    while (yield >= 100) {
        totalExtract += (yield - workersConsumePerDay);
        yield -= 10;
        days++
    }
    totalExtract -= workersConsumePerDay /// abandonation fee
    if (totalExtract < 0) {
        totalExtract = 0
    }
    console.log(`${days}\n${totalExtract}`);
}
price(45)