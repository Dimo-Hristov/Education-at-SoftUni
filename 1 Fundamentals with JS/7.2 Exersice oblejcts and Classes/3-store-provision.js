function storeProvision(wherehouse, orderedProducts) {
    let finalwherehouse = {}
    const wherehouseLength = wherehouse.length

    for (let index = 0; index < wherehouseLength; index += 2) {
        let product = wherehouse[index];
        finalwherehouse[product] = Number(wherehouse[index + 1]);
    }

    const orderedProductsLength = orderedProducts.length

    for (let index = 0; index < orderedProductsLength; index += 2) {
        const type = orderedProducts[index];
        const qty = Number(orderedProducts[index + 1]);

        if (!finalwherehouse.hasOwnProperty(type)) {
            finalwherehouse[type] = 0;
        }
        finalwherehouse[type] += qty
    }

    for (const key in finalwherehouse) {
        console.log(`${key} -> ${finalwherehouse[key]}`);
    }

}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

//     3. Store Provision

// You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.

// The following information applies to both arrays:

// Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)

// All of the arrays’ values will be strings.