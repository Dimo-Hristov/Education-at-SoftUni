const fs = require('fs');

const readStream = fs.createReadStream('./input.txt', 'utf-8');

readStream.on('data', (chunk) => {
    console.log('Read chunk');
    console.log(chunk);
})