const fs = require('fs');

const readStream = fs.createReadStream('./input.txt');

readStream.on('data', (chunk) => {
    console.log('Read chunk');
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('Reading data is finished');
})