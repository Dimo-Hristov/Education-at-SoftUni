function mining(input) {
    let index = 0;
    let gramsOfGold = Number(input[index++])
    let stealDay = 0;
    let totalMoney = 0;
    let dayOfFirstBitCoin = 0;
    let bitCoins = 0;
    const bitCoinPrice = 11949.16;
    const goldToDollarsExchangeRate = 67.51;
    let counter = 0;

    while (gramsOfGold > 0) {
        counter++
        stealDay++
        if (stealDay >= 3) {
            gramsOfGold = gramsOfGold * 0.7
            stealDay = 0;
        }
        totalMoney += gramsOfGold * goldToDollarsExchangeRate
        while (totalMoney >= bitCoinPrice) {
            bitCoins++
            totalMoney -= bitCoinPrice
            if (dayOfFirstBitCoin <= 0) {
                dayOfFirstBitCoin = counter
            }
        }
        gramsOfGold = Number(input[index++])
    }
    console.log(`Bought bitcoins: ${bitCoins}`);
    if (bitCoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitCoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
mining([100, 200, 300])