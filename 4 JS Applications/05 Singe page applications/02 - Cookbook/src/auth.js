const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');

export function updateAuth() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        userNavigation.style.display = 'inline';
        guestNavigation.style.display = 'none';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline';
    }
}

export function logout() {
    localStorage.removeItem('user');

    updateAuth();
}

export function getToken() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user.accessToken;
    }
}