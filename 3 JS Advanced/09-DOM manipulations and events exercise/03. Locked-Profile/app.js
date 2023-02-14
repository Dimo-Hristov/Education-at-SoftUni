function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(button => button.addEventListener('click', onClick));

    function onClick(event) {
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value = "unlock"]');
        if (unlockedCheck.checked) {
            const hiddenDiv = parent.querySelector('div');
            hiddenDiv.style.display == 'block' ?
                hiddenDiv.style.display = 'none'
                : hiddenDiv.style.display = 'block'

            event.target.textContent == 'Show more' ?
                event.target.textContent = 'Hide it'
                : event.target.textContent = 'Show more'
        }
    }
}

// In this problem, you should create a JS functionality that shows and hides the additional information about users.When one of the [Show more] buttons is clicked, the hidden information inside the div should

// be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!

// Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.