function solve() {
  let [inputAreaElement, resultAreaElement] = document.querySelectorAll('textarea');
  let [generateButtonElement, buyButtonElement] = document.querySelectorAll('button');

  generateButtonElement.addEventListener('click', elementsGenerator);
  buyButtonElement.addEventListener('click', priceGenerator)

  function elementsGenerator() {
    const inputArray = JSON.parse(inputAreaElement.value);

    for (const obj of inputArray) {
      const trElement = document.createElement('tr');

      const imageTdElement = document.createElement('td');
      const imgElement = document.createElement('img');
      imgElement.src = obj.img
      imageTdElement.appendChild(imgElement);

      const nameTdElement = document.createElement('td');
      const nameElement = document.createElement('p');
      nameElement.textContent = obj.name;
      nameTdElement.appendChild(nameElement);

      const priceTdElement = document.createElement('td');
      const priceElement = document.createElement('p');
      priceElement.textContent = obj.price;
      priceTdElement.appendChild(priceElement);

      const decorationTdElement = document.createElement('td');
      const decorationElement = document.createElement('p');
      decorationElement.textContent = obj.decFactor;
      decorationTdElement.appendChild(decorationElement);

      const markTdElement = document.createElement('td')
      const markElement = document.createElement('input');
      markElement.type = 'checkbox';
      markTdElement.appendChild(markElement)

      trElement.appendChild(imageTdElement);
      trElement.appendChild(nameTdElement);
      trElement.appendChild(priceTdElement);
      trElement.appendChild(decorationTdElement);
      trElement.appendChild(markTdElement)

      document.querySelector('tbody').appendChild(trElement)
    }

  }

  function priceGenerator() {
    const checkedElements = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
    const boughtFurnitures = [];
    let totalPrice = 0;
    let averageDecorationFactor = 0;

    checkedElements.forEach(x => {
      const parentTr = x.parentElement.parentElement;
      const fournitureDetails = Array.from(parentTr.querySelectorAll('td'))

      const currentItemName = fournitureDetails[1].textContent;
      const currentItemPrice = Number(fournitureDetails[2].textContent);
      const currentItemDecorationFactor = Number(fournitureDetails[3].textContent);

      boughtFurnitures.push(currentItemName);
      totalPrice += currentItemPrice
      averageDecorationFactor += currentItemDecorationFactor;
    })
    resultAreaElement.textContent += `Bought furniture: ${boughtFurnitures.join(', ')}\r\n`
    resultAreaElement.textContent += `Total price: ${totalPrice.toFixed(2)}\r\n`
    resultAreaElement.textContent += `Average decoration factor: ${averageDecorationFactor / checkedElements.length}`
  }
}

// You will be given some furniture as an array of objects. Each object will have a name, a price, and a decoration factor.

// When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture with image, name, price, and decoration factor (code example below).

// When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".

// On the next line, print the total price in the format: "Total price: {totalPrice}" (formatted to the second decimal point). Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"

// Input Example

// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]