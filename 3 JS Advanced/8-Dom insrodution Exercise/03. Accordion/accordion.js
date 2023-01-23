function toggle() {
    let buttonElement = document.querySelector('.button');

    if (buttonElement.textContent == 'More') {
        buttonElement.textContent = 'Less';
        document.querySelector('#extra').style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        document.querySelector('#extra').style.display = 'none';
    }
}