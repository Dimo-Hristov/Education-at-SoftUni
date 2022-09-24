function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let gladiatorExpenses = 0;
    let shieldBrake = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        if (currentFight % 2 == 0) {
            gladiatorExpenses += helmetPrice;
        }

        if (currentFight % 3 == 0) {
            gladiatorExpenses += swordPrice
        }

        if (currentFight % 2 == 0 && currentFight % 3 == 0) {
            gladiatorExpenses += shieldPrice
            shieldBrake++
            if (shieldBrake % 2 == 0) {
                gladiatorExpenses += armorPrice
            }
        }

    }
    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);

}
gladiator(23, 12.50, 21.50, 40, 200)