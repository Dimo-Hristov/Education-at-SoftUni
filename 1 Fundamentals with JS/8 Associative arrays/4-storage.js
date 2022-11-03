function storage(input) {
    let map = new Map();

    for (const entry of input) {
        let [product, qty] = entry.split(' ');
        qty = Number(qty)
        if (map.has(product)) {
            let currentqty = map.get(product)
            let newqty = currentqty + qty
            map.set(product, newqty)
        } else {
            map.set(product, qty)
        }

    }

    for (const [product, qty] of map) {
        console.log(`${product} -> ${qty}`);
    }
}
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])

    // Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The input comes as an array of strings. Try using a Map().