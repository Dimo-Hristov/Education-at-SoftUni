function orderCalculator(typeOfProduct, qty) {
    let singlePrice = 0;
    let totalPrice = 0;

    switch (typeOfProduct) {
        case 'coffee': singlePrice = 1.5; break;
        case 'water': singlePrice = 1; break;
        case 'coke': singlePrice = 1.4; break;
        case 'snacks': singlePrice = 2; break;
        default: return 'Invalid product'
    }
    totalPrice = singlePrice * qty
    return totalPrice.toFixed(2)
}
orderCalculator("water", 5)