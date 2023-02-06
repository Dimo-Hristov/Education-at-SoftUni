window.addEventListener("load", solve);

function solve() {
    const modelElement = document.getElementById("model");
    const yearElement = document.getElementById("year");
    const descriptionElement = document.getElementById("description");
    const priceElement = document.getElementById("price");
    const submitButtonElement = document.getElementById("add");
    const furnitureListElement = document.getElementById('furniture-list');

    submitButtonElement.addEventListener("click", (e) => {
        e.preventDefault()
        let isValidModel = modelElement.value !== "" ? true : false;
        let isValidEar = Number(yearElement.value) > 0 ? true : false;
        let isValidDescription = descriptionElement.value !== "" ? true : false;
        let isValidPrice = Number(priceElement.value) > 0 ? true : false;
        // console.log(isValidModel);
        // console.log(isValidEar);
        // console.log(isValidDescription);
        // console.log(isValidPrice);


        if (isValidModel && isValidEar && isValidDescription && isValidPrice) {

            let model = modelElement.value;
            modelElement.value = ''
            let ear = Number(yearElement.value);
            yearElement.value = ''
            let description = descriptionElement.value;
            descriptionElement.value = ''
            let price = Number(priceElement.value)
            priceElement.value = ''



            let rowElement = document.createElement('tr');
            let modelCellElement = document.createElement('td');
            let priceCellElement = document.createElement('td');
            let actionCellElement = document.createElement('td');
            let infoButtonElement = document.createElement('button');
            let buyButtonElement = document.createElement('button');

            rowElement.classList = 'info'

            modelCellElement.textContent = model;
            priceCellElement.textContent = price.toFixed(2);

            infoButtonElement.textContent = 'More Info';
            infoButtonElement.classList = 'moreBtn'
            buyButtonElement.textContent = 'Buy it';
            buyButtonElement.classList = 'buyBtn'

            actionCellElement.appendChild(infoButtonElement);
            actionCellElement.appendChild(buyButtonElement);

            rowElement.appendChild(modelCellElement);
            rowElement.appendChild(priceCellElement);
            rowElement.appendChild(actionCellElement)

            furnitureListElement.appendChild(rowElement);

            let hiddenRowElement = document.createElement('tr');
            let yearCellElement = document.createElement('td');
            let descriptionCellElement = document.createElement('td')

            hiddenRowElement.classList = 'hide';
            hiddenRowElement.style.display = 'none';

            yearCellElement.textContent = `Year: ${ear}`;
            descriptionCellElement.textContent = `Description: ${description}`;
            descriptionCellElement.colSpan = '3';

            hiddenRowElement.appendChild(yearCellElement);
            hiddenRowElement.appendChild(descriptionCellElement);

            furnitureListElement.appendChild(hiddenRowElement);

            infoButtonElement.addEventListener('click', (e) => {

                if (e.currentTarget.textContent == 'More Info') {
                    hiddenRowElement.style.display = 'contents'
                    infoButtonElement.textContent = 'Less Info';

                } else {
                    infoButtonElement.textContent = 'More Info';
                    hiddenRowElement.style.display = 'none';
                }
            })

            buyButtonElement.addEventListener('click', (e) => {
                let totalPriceElement = document.querySelector('.total-price');
                totalPriceElement.textContent = (Number(totalPriceElement.textContent) + price).toFixed(2);
                furnitureListElement.removeChild(rowElement);
                furnitureListElement.removeChild(hiddenRowElement)
            })
        }
    })
}
