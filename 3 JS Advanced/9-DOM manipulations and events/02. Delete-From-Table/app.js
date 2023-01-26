function deleteByEmail() {
    let textInputElement = document.querySelector('input[name=email]');
    let emailListElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailListElement);
    let targetEmail = emailElements.find(x => x.textContent == textInputElement.value);
    textInputElement.value = '';

    if (targetEmail == undefined) {
        resultElement.textContent = 'Not found.'
        return
    }

    targetEmail.parentNode.remove();
    resultElement.textContent = 'Deleted.'
}

// Write a program that takes an email from an input field and deletes the matching row from a table.

// · If entry is found, the textContent in the element with id="result" must be set to "Deleted."

// · Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found."

// Submit only the deleteByEmail() function in Judge.

// Input/Output

// There will be no input/output, your program should instead modify the DOM of the given HTML document