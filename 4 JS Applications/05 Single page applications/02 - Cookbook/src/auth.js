const guestNavigation = document.getElementById('guest');
const userNavigation = document.getElementById('user');


export function updateAuth() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        guestNavigation.style.display = 'none';
        userNavigation.style.display = 'inline';
    } else {
        guestNavigation.style.display = 'inline';
        userNavigation.style.display = 'none';
    }
}

export function logout() {
    localStorage.removeItem('user');
}

export function getToken() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user.accessToken;
    }
}