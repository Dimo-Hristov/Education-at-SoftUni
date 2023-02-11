const addButtonElement = document.getElementById('add');
const resetButtonElement = document.getElementById('reset');
const sendButtonElement = document.getElementById('send');
const recipientElement = document.getElementById('recipientName');
const titleElement = document.getElementById('title');
const messageElement = document.getElementById('message');
const ListOfMailsElement = document.getElementById('list');
const sentMailsElement = document.getElementById('sent-mails');


addButtonElement.addEventListener('click', addElements);
resetButtonElement.addEventListener('click', clearInputs);
sendButtonElement.addEventListener('click', sendEmail)



function addElements(e) {

    e.preventDefault();
    const isValidRecipient = recipientElement.value != '' ? true : false;
    const isValidTittle = titleElement.value != '' ? true : false;
    const isValidMessage = messageElement.value != '' ? true : false;

    if (isValidRecipient && isValidTittle && isValidMessage) {

        let mainLiElement = document.createElement('li');

        let title = document.createElement('h4');
        title.textContent = `Title: ${titleElement.value}`
        mainLiElement.appendChild(title);
        titleElement.value = '';

        let recipient = document.createElement('h4');
        recipient.textContent = `Recipient Name: ${recipientElement.value}`;
        mainLiElement.appendChild(recipient);
        recipientElement.value = '';


        let message = document.createElement('span');
        message.textContent = messageElement.value;
        mainLiElement.appendChild(message);
        messageElement.value = '';

        let buttonsElement = document.createElement('div');
        buttonsElement.id = 'list-action';

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.type = 'submit';
        sendButton.id = 'send';
        buttonsElement.appendChild(sendButton);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        buttonsElement.appendChild(deleteButton);

        mainLiElement.appendChild(buttonsElement);

        ListOfMailsElement.appendChild(mainLiElement);
    }

}

function clearInputs(e) {

    e.preventDefault()
    recipientElement.value = '';
    titleElement.value = '';
    messageElement.value = '';

}

function sendEmail() {
    const titleAndRecipientInfoElement = document.querySelectorAll('#list li h4');
    const tittleString = titleAndRecipientInfoElement[0].textContent.slice(7);
    const recipiendString = titleAndRecipientInfoElement[1].textContent.slice(16);

    const mainLiElement = document.createElement('li');

    const recipientSpan = document.createElement('span');
    recipientSpan.textContent = `To: ${recipiendString}`;
    mainLiElement.appendChild(recipientSpan);

    const titleSpain = document.createElement('span');
    titleSpain.textContent = `Title: ${tittleString}`;
    mainLiElement.appendChild(titleSpain);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList = 'btn';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'submit';
    deleteButton.classList = 'delete';
    deleteButton.textContent = 'Delete';

    buttonsDiv.appendChild(deleteButton);

    mainLiElement.appendChild(buttonsDiv);

    sentMailsElement.appendChild(mainLiElement)
    const secondChildren = ListOfMailsElement[1];

    ListOfMailsElement.removeChild(secondChildren);
}

