function barIncome(input) {
    let text = input.join(',')

    const pattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>[\w]+)>[^|%$.]*\|(?<count>\d+)[^|%$.]*\|(?<price>[\d]+[\.]*[\d]+)\$/g;

    let matches = text.matchAll(pattern);

    let sum = 0;

    for (const match of matches) {
        let name = match.groups.name;
        let product = match.groups.product;
        let count = Number(match.groups.count);
        let price = Number(match.groups.price);

        let totalPrice = count * price;
        sum += totalPrice;

        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);

//     Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and you are the person who has to draw the line and calculate the money from the products that were sold throughout the day. Until you receive a line with the text "end of shift" you will be given lines of input. But before processing that line you have to do some validations first.

// Each valid order should have a customer, product, count, and a price:

// · Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters

// · Valid product contains any word character and must be surrounded by '<' and '>'

// · Valid count is an integer, surrounded by '|'

// · Valid price is any real number followed by '$'

// The parts of a valid order should appear in the order given: customer, product, count, and price.

// Between each part there can be other symbols, except ('|', '$', '%' and '.')

// For each valid line print on the console: "{customerName}: {product} - {totalPrice}"

// When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}".

// Input / Constraints

// · Strings that you have to process until you receive text "end of shift".

// Output

// · Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"

// · After receiving "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}"

// · Allowed working time / memory: 100ms / 16MB.