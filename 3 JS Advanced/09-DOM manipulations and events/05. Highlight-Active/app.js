function focused() {
    let targetElement = document.querySelectorAll('div input');
    let arr = Array.from(targetElement);

    for (let el of targetElement) {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused';
        })
        el.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        })
    }
}

// Write a function that highlights the currently active section of a document. There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focused". When the focus is lost (blurred), remove the class from the element.

// Submit only the focused() function in Judge.

// Input/Output

// There will be no input/output, your program should instead modify the DOM of the given HTML document.