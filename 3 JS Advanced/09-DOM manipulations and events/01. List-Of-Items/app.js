function addItem() {
    let ulElement = document.getElementById('items');
    let newTextElement = document.getElementById('newItemText');
    let newElement = document.createElement('li');
    newElement.textContent = newTextElement.value;
    ulElement.appendChild(newElement);
    newTextElement.value = ''
}

// Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.