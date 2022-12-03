function fancyBarcodes(input) {
    let totalLines = Number(input.shift());

    let pattern = /[@]{1}[#]+(?<product>[A-Z]+[a-zA-Z-0-9]{4,}[A-Z]+)[@]{1}[#]+/gm
    let digitsPattern = /\d/gm;

    for (let i = 0; i < totalLines; i++) {
        let currentBarcode = input.shift();
        let isValid = currentBarcode.match(pattern);

        if (isValid == null) {
            console.log('Invalid barcode');
            continue;
        }

        let validBarcode = isValid[0];
        let digits = validBarcode.match(digitsPattern)


        if (digits == null) {
            console.log('Product group: 00')
        } else {
            console.log(`Product group: ${digits.join('')}`);
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);


    //     Your first task is to determine if the given sequence of characters is a valid barcode or not.
// Each line must not contain anything else but a valid barcode. A barcode is valid when:
// •	It is surrounded by a "@" followed by one or more "#"
// •	It is at least 6 characters long (without the surrounding "@" or "#")
// •	It starts with a capital letter
// •	It contains only letters (lower and upper case) and digits
// •	It ends with a capital letter
// Examples of valid barcodes: @###Che46sE@##, @#FreshFisH@#, @###Brea0D@###, @##Che46sE@##
// Examples of invalid barcodes: ##InvaliDiteM##, @InvalidIteM@, @#Invalid_IteM@#
// Next, you have to determine the product group of the item from the barcode. The product group is obtained by concatenating all the digits found in the barcode. If there are no digits present in the barcode, the default product group is "00".
// Examples:
// @#FreshFisH@# -> product group: 00
// @###Brea0D@### -> product group: 0
// @##Che4s6E@## -> product group: 46
// Input
// On the first line, you will be given an integer n – the count of barcodes that you will be receiving next.
// On the following n lines, you will receive different strings.
// Output
// For each barcode that you process, you need to print a message.
// If the barcode is invalid:
// •	"Invalid barcode"
// If the barcode is valid:
// •	"Product group: {product group}"
