function validate() {
    const emailValidator = /^[a-z-\.]+@[a-z-\.]+\.[a-z]{2,4}/
    const inputElement = document.getElementById('email');

    inputElement.addEventListener('change', () => {
        if (inputElement.value.match(emailValidator)) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    })
}