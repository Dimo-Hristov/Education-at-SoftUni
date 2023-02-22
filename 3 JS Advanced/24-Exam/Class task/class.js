class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space == 0) {
            throw new Error('Not enough space in the cellar.');
        }

        const reservation = {
            wineName,
            wineType,
            price,
            paid: false,
        }

        this.wines.push(reservation)
        this.space--

        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        const currentWine = this.wines.find(x => x.wineName == wineName)

        if (currentWine == undefined) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if (currentWine.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        }

        currentWine.paid = true;
        this.bill += Number(price);

        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        const indexOfWine = this.wines.findIndex(x => x.wineName == wineName);

        if (indexOfWine == -1) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }

        if (this.wines[indexOfWine].paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines.splice(indexOfWine, 1);

        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if (wineType == undefined) {
            let output = [];
            let firstLine = `You have space for ${this.space} bottles more.`
            output.push(firstLine);

            let secondLine = `You paid ${this.bill}$ for the wine.`
            output.push(secondLine);

            this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach(x => {
                    let isPaid = x.paid == true ? 'Has Paid' : 'Not Paid'
                    output.push(`${x.wineName} > ${x.wineType} - ${isPaid}.`)
                })

            return output.join('\n')
        }

        let filteredWines = this.wines.filter(x => x.wineType == wineType);

        if (filteredWines.length == 0) {
            throw new Error(`There is no ${wineType} in the cellar.`)
        }

        let output = [];

        filteredWines.forEach(x => {
            let isPaid = x.paid == true ? 'Has Paid' : 'Not Paid'
            output.push(`${x.wineName} > ${x.wineType} - ${isPaid}.`);
        })
        return output.join('\n')
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());





