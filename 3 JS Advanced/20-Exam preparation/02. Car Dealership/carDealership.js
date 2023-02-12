class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        const isValidModel = model != '' ? true : false;
        const isValidhorsepower = Number.isInteger(horsepower) >= 0 ? true : false;
        const isValidprice = price >= 0 ? true : false;
        const isValidMileage = mileage >= 0 ? true : false;

        if (!isValidModel || !isValidhorsepower || !isValidprice || !isValidMileage) {
            throw new Error('Invalid input!');
        }

        const currentCar = {
            model,
            horsepower,
            price,
            mileage
        }
        this.availableCars.push(currentCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        const desiredCarIndex = this.availableCars.findIndex(x => x.model == model);

        if (desiredCarIndex == -1) {
            throw new Error(`${model} was not found!`);
        }

        const [desiredCar] = this.availableCars.splice(desiredCarIndex, 1);
        const carMileage = desiredCar.mileage;

        const mileageDifference = carMileage - desiredMileage;

        if (mileageDifference > 40000) {
            desiredCar.price *= 0.9;
        } else if (mileageDifference > 0) {
            desiredCar.price *= 0.95;
        }

        const soldPrice = desiredCar.price;

        const soldCar = {
            model,
            horsepower: desiredCar.horsepower,
            soldPrice,
        }

        this.soldCars.push(soldCar);
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars'
        }

        let output = []
        output.push('-Available cars:');
        this.availableCars.forEach(x => {
            output.push(`---${x.model} - ${x.horsepower} HP - ${(x.mileage).toFixed(2)} km - ${(x.price).toFixed(2)}$`)
        })

        return output.join('\n');
    }

    salesReport(criteria) {
        if (criteria == 'horsepower') {
            const output = [];
            output.push(`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`);
            output.push(`-${this.soldCars.length} cars sold:`);

            this.soldCars
                .sort((a, b) => b.soldPrice - a.soldPrice)
                .forEach(x => {
                    output.push(`---${x.model} - ${x.horsepower} HP - ${(x.soldPrice).toFixed(2)}$`)
                })

            return output.join('\n')
        }

        if (criteria == 'model') {
            const output = [];
            output.push(`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`);
            output.push(`-${this.soldCars.length} cars sold:`);

            this.soldCars
                .sort((a, b) => a.model.localeCompare(b.model))
                .forEach(x => {
                    output.push(`---${x.model} - ${x.horsepower} HP - ${(x.price).toFixed(2)}$`)
                })

            return output.join('\n')
        }
    }
}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);

dealership.addCar('Mercedes C63', 300, 29000, 187000);

dealership.addCar('Audi A3', 120, 4900, 240000);

dealership.sellCar('Toyota Corolla', 230000);

dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('horsepower'));