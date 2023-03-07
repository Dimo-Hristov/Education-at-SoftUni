const guestNavigation = document.querySelectorAll('.nav-item-guest');
const userNavigation = document.querySelectorAll('.nav-item-user');
const welcomeMessage = userNavigation[0]

export function updateAuth() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        guestNavigation.forEach(x => x.style.display = 'none');
        userNavigation.forEach(x => x.style.display = 'inline');

        // const username = localStorage.get('username');
        // welcomeMessage.textContent = `Welcome, ${username}`;

    } else {
        guestNavigation.forEach(x => x.style.display = 'inline');
        userNavigation.forEach(x => x.style.display = 'none');
        welcomeMessage.textContent = `Welcome, email`;
    }
}