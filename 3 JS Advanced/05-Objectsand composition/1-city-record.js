function cityRecord(name, population, treasury) {
    return {
        name,
        population,
        treasury
    };
}

console.log(cityRecord('Tortuga', 7000, 15000));
console.log(cityRecord('Santo Domingo', 12000, 23500));

// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.