function area() {

    return Math.abs(this.x * this.y);

};

function vol() {

    return Math.abs(this.x * this.y * this.z);

};

// function solve(area, vol, input) {
//     const cordinates = JSON.parse(input);
//     const result = [];
//     for (const point of cordinates) {
//         let obj = {
//             area: area.call(point),
//             volume: vol.call(point),
//         }
//         result.push(obj);
//     }
//     return result;
// }

// Fancy solve 
function solve(area, vol, input) {
return JSON.parse(input).map( x => ({
            area: area.call(x),
            volume: vol.call(x),
        })
        );
    
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},  
    {"x":"7","y":"7","z":"10"}, 
    {"x":"5","y":"2","z":"10"} 
    ]`));

    // Write a function that calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z).
    // Input

// You will receive 3 parameters - the functions area and vol and a string, which contains the figures' coordinates.

// For more information check the examples.

// Output

// The output should be returned as an array of objects. Each object has two properties: the figure's area and volume.

// [

// { area: ${area1}, volume: ${volume1} },

// { area: ${area2}, volume: ${volume2} },

// . . .

// ]

// Note:

// Submit only the solve function.


// INPUT =>>>>

// area, vol, `[

//     {"x":"1","y":"2","z":"10"},
    
//     {"x":"7","y":"7","z":"10"},
    
//     {"x":"5","y":"2","z":"10"}
    
//     ]

//     OUTPUT =>>>>>

//     [ { area: 2, volume: 20 }, { area: 49, volume: 490 }, { area: 10, volume: 100 } ]
