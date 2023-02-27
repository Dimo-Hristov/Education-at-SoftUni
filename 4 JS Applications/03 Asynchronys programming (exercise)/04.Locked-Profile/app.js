function lockedProfile() {
    const parentDivElement = document.getElementById('main');
    parentDivElement.innerHTML = ''

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(data => generateUsers(data))



    function generateUsers(data) {
        for (const row in data) {
            let user = data[row];

            const mainDivElement = elementCreator('div', '', parentDivElement, 'profile')

            const imageElement = elementCreator('img', '', mainDivElement, 'userIcon')
            imageElement.setAttribute('src', './iconProfile2.png');

            elementCreator('label', 'Lock', mainDivElement);

            const locked = elementCreator('input', '', mainDivElement)
            locked.type = 'radio'
            locked.name = `${user.username}Locked`;
            locked.value = 'lock'
            locked.checked = true;
            locked.addEventListener('change', () => {
                if (locked.checked) {
                    unlocked.checked = false;
                }
            })

            elementCreator('label', 'Unlock', mainDivElement);
            const unlocked = elementCreator('input', '', mainDivElement)
            unlocked.type = 'radio'
            unlocked.name = user.username;
            unlocked.value = 'lock';
            unlocked.addEventListener('change', () => {
                if (unlocked.checked) {
                    locked.checked = false
                }
            })

            elementCreator('br', '', mainDivElement)
            elementCreator('hr', '', mainDivElement);
            elementCreator('label', 'Username', mainDivElement);

            const usernameInput = elementCreator('input', '', mainDivElement);
            usernameInput.type = 'text';
            usernameInput.name = user.username;
            usernameInput.value = user.username;
            usernameInput.disabled = true;

            //hidden section
            const hiddenInfoDiv = elementCreator('div', '', mainDivElement, user.username);
            hiddenInfoDiv.style.display = 'none'

            elementCreator('hr', '', hiddenInfoDiv);
            elementCreator('label', 'Email:', hiddenInfoDiv);

            const emailInput = elementCreator('input', '', hiddenInfoDiv);
            emailInput.type = 'text';
            emailInput.name = user.username;
            emailInput.value = user.email;
            emailInput.disabled = true;

            elementCreator('label', 'Age:', hiddenInfoDiv);

            const ageInput = elementCreator('input', '', hiddenInfoDiv);
            ageInput.type = 'text';
            ageInput.name = user.username;
            ageInput.value = user.age;
            ageInput.disabled = true;

            const showButton = elementCreator('button', 'Show more', mainDivElement)
            showButton.addEventListener('click', () => {
                if (unlocked.checked) {
                    if (hiddenInfoDiv.style.display == 'none') {
                        hiddenInfoDiv.style.display = 'block';
                        showButton.textContent = 'Hide it';

                    } else {
                        hiddenInfoDiv.style.display = 'none';
                        showButton.textContent = 'Show more';
                    }

                }
            })
        }
    }

    function elementCreator(type, content, parent, setClass) {
        let element = document.createElement(type);
        element.textContent = content;

        if (setClass) {
            element.setAttribute('class', setClass)
        }

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}



