window.addEventListener('load', solution);

function solution() {
  const submitButtonElement = document.getElementById('submitBTN');
  const fullNameElement = document.getElementById('fname');
  const emailElement = document.getElementById('email');
  const phoneNumberElement = document.getElementById('phone');
  const adressElement = document.getElementById('address');
  const postalCodeElement = document.getElementById('code');
  const infoPreviewElement = document.getElementById('infoPreview');
  const editButtonElement = document.getElementById('editBTN');
  const continueButtonElement = document.getElementById('continueBTN');
  const mainDivElement = document.getElementById('block');

  submitButtonElement.addEventListener('click', submitInfo);
  editButtonElement.addEventListener('click', editInfo);
  continueButtonElement.addEventListener('click', completeOrder);




  function submitInfo() {
    // make list items from the input and append it to the infoPreview ID
    if (fullNameElement.value != '' && emailElement.value != '') {
      const fullNamelCol = document.createElement('li');
      fullNamelCol.textContent = `Full name: ${fullNameElement.value}`
      infoPreviewElement.appendChild(fullNamelCol);

      const emaillCol = document.createElement('li');
      emaillCol.textContent = `Email: ${emailElement.value}`
      infoPreviewElement.appendChild(emaillCol);

      const phoneNumberCol = document.createElement('li');
      phoneNumberCol.textContent = `Phone Number: ${phoneNumberElement.value}`
      infoPreviewElement.appendChild(phoneNumberCol);

      const adressCol = document.createElement('li');
      adressCol.textContent = `Adress: ${adressElement.value}`
      infoPreviewElement.appendChild(adressCol);

      const postalCodeCol = document.createElement('li');
      postalCodeCol.textContent = `Postal code: ${postalCodeElement.value}`
      infoPreviewElement.appendChild(postalCodeCol);

      // clear the fields 
      fullNameElement.value = '';
      emailElement.value = '';
      phoneNumberElement.value = '';
      adressElement.value = '';
      postalCodeElement.value = '';

      submitButtonElement.setAttribute('disabled', true);
      editButtonElement.removeAttribute('disabled');
      continueButtonElement.removeAttribute('disabled');
    }
  }

  function editInfo() {
    const reviewInformation = Array.from(document.querySelectorAll('#infoPreview li'));

    const fullName = reviewInformation[0].textContent.slice(11);
    const email = reviewInformation[1].textContent.slice(7);
    const phoneNumber = reviewInformation[2].textContent.slice(14);
    const adress = reviewInformation[3].textContent.slice(8);
    const postalCode = reviewInformation[4].textContent.slice(13);

    fullNameElement.value = fullName;
    emailElement.value = email;
    phoneNumberElement.value = phoneNumber;
    adressElement.value = adress;
    postalCodeElement.value = postalCode;

    submitButtonElement.removeAttribute('disabled');
    editButtonElement.setAttribute('disabled', true);
    continueButtonElement.setAttribute('disabled', true);

    while (infoPreviewElement.firstChild) {
      infoPreviewElement.removeChild(infoPreviewElement.firstChild);
    }
  }

  function completeOrder() {
    while (mainDivElement.firstChild) {
      mainDivElement.removeChild(mainDivElement.firstChild);
    }

    let finalMessageelement = document.createElement('h3');
    finalMessageelement.textContent = 'Thank you for your reservation!'
    mainDivElement.appendChild(finalMessageelement)
  }

}
