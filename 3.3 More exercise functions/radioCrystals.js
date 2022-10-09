function radioCrystals(array) {
    // [1000, 4000, 8100]
    let target = array[0];
    let arrayLength = array.length;

    for (let i = 1; i < arrayLength; i++) {
        let currentCrystal = array[i];
        console.log(`Processing chunk ${currentCrystal} microns`);

        if (currentCrystal != target - 1) {
            currentCrystal = Cut(currentCrystal);
        }
        if (currentCrystal != target - 1) {
            currentCrystal = Lap(currentCrystal);
        }
        if (currentCrystal != target - 1) {
            currentCrystal = Grind(currentCrystal);
        }
        if (currentCrystal != target - 1) {
            currentCrystal = Etch(currentCrystal);
        }
        if (currentCrystal < target) {
            currentCrystal = xRay(currentCrystal);
        }

        console.log(`Finished crystal ${currentCrystal} microns`);
    }

    function Cut(currentCrystal) {
        let counter = 0;
        while (currentCrystal >= target - 1) {
            if (currentCrystal / 4 >= target - 1) {
                counter++;
                currentCrystal /= 4;
            } else {
                if (counter >= 1) {
                    console.log(`Cut x${counter}`);
                    console.log("Transporting and washing");
                }
                return Math.floor(currentCrystal);
            }
        }
    }

    function Lap(currentCrystal) {
        let counter = 0;
        while (currentCrystal >= target - 1) {
            if (currentCrystal * 0.8 >= target - 1) {
                counter++;
                currentCrystal *= 0.8;
            } else {
                if (counter >= 1) {
                    console.log(`Lap x${counter}`);
                    console.log("Transporting and washing");
                }
                return Math.floor(currentCrystal);
            }
        }
    }

    function Grind(currentCrystal) {
        let counter = 0;
        while (currentCrystal >= target - 1) {
            if (currentCrystal - 20 >= target - 1) {
                counter++;
                currentCrystal -= 20;
            } else {
                if (counter >= 1) {
                    console.log(`Grind x${counter}`);
                    console.log("Transporting and washing");
                }
                return Math.floor(currentCrystal);
            }
        }
    }

    function Etch(currentCrystal) {
        let counter = 0;
        while (currentCrystal >= target - 1) {
            if (currentCrystal - 2 >= target - 1) {
                counter++;
                currentCrystal -= 2;
            } else {
                if (counter >= 1) {
                    console.log(`Etch x${counter}`);
                    console.log("Transporting and washing");
                }
                return Math.floor(currentCrystal);
            }
        }
    }

    function xRay(currentCrystal) {
        currentCrystal += 1;
        console.log("X-ray x1");
        return Math.floor(currentCrystal);
    }
}
radioCrystals([1000, 4000, 8100]);
