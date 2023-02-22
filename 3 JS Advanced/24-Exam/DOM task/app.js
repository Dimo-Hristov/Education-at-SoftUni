window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const peopleNumberElement = document.getElementById('people-count');
    const dateElement = document.getElementById('from-date');
    const daysElement = document.getElementById('days-count');
    const nextStepButton = document.getElementById('next-btn');
    const ticketPreviewList = document.querySelector('.ticket-info-list');
    const confirmTicketElement = document.querySelector('.confirm-ticket');
    const mainDivElement = document.getElementById('main');
    const bodyElement = document.getElementById('body');
    nextStepButton.addEventListener('click', nextStep);




    function nextStep(e) {
        e.preventDefault();

        let firstNameValue = firstNameElement.value;
        let lastNameValue = lastNameElement.value;
        let peopleNumberValue = peopleNumberElement.value;
        let dateValue = dateElement.value;
        let daysValue = daysElement.value;


        if (firstNameValue != '' && lastNameValue != '' && peopleNumberValue != '' && dateValue != '' && daysValue != '') {

            const mainLiElement = createElement('li', '', ticketPreviewList);
            const article = createElement('article', '', mainLiElement)
            mainLiElement.setAttribute('class', 'ticket');

            const nameContent = `Name: ${firstNameElement.value}`
            const name = createElement('h3', nameContent, article);

            const fromdateContent = `From date :${dateElement.value}`
            const fromDate = createElement('p', fromdateContent, article);

            const forDateContenct = `For ${daysElement.value} days`
            const fordays = createElement('p', forDateContenct, article);

            const forPeopleContect = `For ${peopleNumberElement.value}  people`;
            const forPeople = createElement('p', forPeopleContect, article);

            const editButton = createElement('button', 'Edit', mainLiElement)
            editButton.setAttribute('class', 'edit-btn');
            editButton.addEventListener('click', (e) => editInfo(e, firstNameValue, lastNameValue, peopleNumberValue, dateValue, daysValue));


            const continueButton = createElement('button', 'Continue', mainLiElement);
            continueButton.setAttribute('class', 'continue-btn');
            continueButton.addEventListener('click', (e) => moveForward(e, mainLiElement, editButton, continueButton))

            editButton.disabled = false;
            continueButton.disabled = false;
            nextStepButton.disabled = true;


            firstNameElement.value = ""
            lastNameElement.value = ""
            peopleNumberElement.value = ""
            dateElement.value = ""
            daysElement.value = ""

        }

    }

    function editInfo(e, firstNameValue, lastNameValue, peopleNumberValue, dateValue, daysValue) {
        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        peopleNumberElement.value = peopleNumberValue;
        dateElement.value = dateValue;
        daysElement.value = daysValue;
        e.currentTarget.parentNode.remove();
        nextStepButton.disabled = false;
    }

    function moveForward(e, mainLiElement, editButton, continueButton) {
        editButton.remove();
        continueButton.remove()

        mainLiElement.classList = 'ticket-content';

        const confirmBtm = createElement('button', 'Confirm', mainLiElement);
        confirmBtm.setAttribute('class', 'confirm-btn');

        const canselBtn = createElement('button', 'Cancel', mainLiElement)
        canselBtn.setAttribute('class', 'cancel-btn');

        canselBtn.addEventListener('click', (e) => canselReservation(e, mainLiElement));
        confirmBtm.addEventListener('click', confirmOrder);

        confirmTicketElement.appendChild(mainLiElement);




    }

    function confirmOrder() {
        mainDivElement.remove();

        const h1 = createElement('h1', 'Thank you, have a nice day!', bodyElement);
        h1.setAttribute('id', 'thank-you')

        const btn = createElement('button', 'Back', bodyElement);
        btn.setAttribute('id', 'back-btn');

        btn.addEventListener('click', backFunction)


    }

    function backFunction() {
        location.reload()
    }

    function canselReservation(e, mainLiElement) {
        mainLiElement.remove();
        nextStepButton.disabled = false;
    }

    function createElement(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element)
        }
        return element
    }

}