function addItem() {
    let newItemElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = newItemElement.value;
    newItemElement.value = ''

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', (e) => {
        console.log(e.currentTarget.parentElement.remove());
    });

    newLiElement.appendChild(deleteElement)
    ulElement.appendChild(newLiElement);
}


// Extend the previous problem to display a [Delete] link after each list item. Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.