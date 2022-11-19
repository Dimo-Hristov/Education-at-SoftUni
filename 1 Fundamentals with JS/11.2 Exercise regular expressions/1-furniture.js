function furniture(input) {
    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]*)!(?<qty>[\d]+)/gm

    console.log('Bought furniture:');

    let row = input.shift();
    let sum = 0;

    while (row !== 'Purchase') {
        let data = pattern.exec(row);
        if (data == null) {
            row = input.shift();
            continue;
        }
        console.log(data.groups.name);

        sum += Number(data.groups.price) * Number(data.groups.qty);

        row = input.shift();
        data = pattern.exec(row);
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',

    '>Invalid<<!5',

    '>>TV<<300.21314!20',

    '>>Invalid<!5',

    '>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase']);

//     Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". For the line to be valid it should be in the following format:

// ">>{furniture name}<<{price}!{quantity}"

// The price can be a floating-point number or a whole number. Furniture items must start with a capital letter. Store the names of the furniture and the total price. At the end print each bought furniture on a separate line in the format:

// "Bought furniture:

// {1st name}

// {2nd name}

// …"

// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second decimal point.

// If there are not valid furniture print only:

// Bought furniture:

// Total money spend: {spend money}