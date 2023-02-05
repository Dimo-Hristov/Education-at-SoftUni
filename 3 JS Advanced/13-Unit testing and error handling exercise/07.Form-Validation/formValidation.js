function validate() {
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    const rePasswordElement = document.getElementById("confirm-password");
    const submitButtonElement = document.getElementById("submit");
    const companyNumberElement = document.getElementById("companyNumber");
    const finalMessageElement = document.getElementById("valid");
    const companyCheckBoxElement = document.getElementById("company");
    const companyInfoElement = document.getElementById("companyInfo");

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
    const passwordPatten = /^[\w]{5,15}$/gm;
    const emailPattern = /.*@.*\..*$/gm;

    companyCheckBoxElement.addEventListener("click", () => {
        if (companyCheckBoxElement.checked) {
            companyInfoElement.style.display = "block";
        } else {
            companyInfoElement.style.display = "none";
        }
    });

    submitButtonElement.addEventListener("click", (e) => {
        e.preventDefault();
        let isValidUsername = false;
        let isValidEmail = false;
        let isValidPassword = false;
        let isValidRePassword = false;
        let isValidCompanyNumber = false;

        if (usernamePattern.exec(usernameElement.value)) {
            usernameElement.style.border = "none";
            isValidUsername = true;
        } else {
            usernameElement.style.borderCollapse = "red";
            console.log('kur');
        }

        if (emailPattern.exec(emailElement.value)) {
            emailElement.style.border = "none";
            isValidEmail = true;
        } else {
            emailElement.style.borderColor = "red";
        }

        if (passwordPatten.exec(passwordElement.value)) {
            passwordElement.style.border = "none";
            isValidPassword = true;
        } else {
            passwordElement.style.borderColor = "red";
        }

        if (
            rePasswordElement.value === passwordElement.value &&
            rePasswordElement.value !== ""
        ) {
            rePasswordElement.style.border = "none";
            isValidRePassword = true;
        } else {
            rePasswordElement.style.borderColor = "red";
        }

        if (companyCheckBoxElement.checked) {
            let companyNumber = Number(companyNumberElement.value);
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                companyNumberElement.style.border = "none";
                isValidCompanyNumber = true;
            } else {
                companyNumberElement.style.borderColor = "red";
            }
        }

        if (companyCheckBoxElement.checked) {
            if (
                isValidUsername &&
                isValidEmail &&
                isValidPassword &&
                isValidRePassword &&
                isValidCompanyNumber
            ) {
                finalMessageElement.style.display = "block";
            } else {
                finalMessageElement.style.display = "none";
            }
        }

        if (!companyCheckBoxElement.checked) {
            if (
                isValidUsername &&
                isValidEmail &&
                isValidPassword &&
                isValidRePassword
            ) {
                finalMessageElement.style.display = "block";
            } else {
                finalMessageElement.style.display = "none";
            }
        }
    });
}
