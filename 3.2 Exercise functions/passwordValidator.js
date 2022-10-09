function passwordValidator(password) {
    let passwordLength = password.length
    let correntLength = () => {
        if (passwordLength >= 6 && passwordLength <= 10) {
            return true;
        } else {
            return false;
        }
    }
    let doesItHaveSumbol = (password) => {
        // only letters and digits
        for (i = 0; i < passwordLength; i++) {
            let currentIndex = password[i];
            let isNumber = currentIndex.charCodeAt() >= 48 && currentIndex.charCodeAt() <= 57;
            let isCapitalLetter = currentIndex.charCodeAt() >= 65 && currentIndex.charCodeAt() <= 90;
            let isSmallLetter = currentIndex.charCodeAt() >= 97 && currentIndex.charCodeAt() <= 122;
            if (!isNumber && !isCapitalLetter && !isSmallLetter) {
                return true;
            }
        }
    }
    let atLeastTwoDigits = (password) => {
        let digitscounter = 0;
        for (i = 0; i < passwordLength; i++) {
            let currentIndex = password[i]
            let isNumber = currentIndex.charCodeAt() >= 48 && currentIndex.charCodeAt() <= 57;
            if (isNumber) {
                digitscounter++
            }
            if (digitscounter >= 2) {
                return true
            }
        }
    }

    if (correntLength() && doesItHaveSumbol(password) != true && atLeastTwoDigits(password)) {
        console.log('Password is valid');
    }
    if (!correntLength()) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (doesItHaveSumbol(password)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!atLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
    }


}
passwordValidator('Pa$s$s')