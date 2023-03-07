const guestNavigation = document.querySelectorAll('.nav-item-guest');
const userNavigation = document.querySelectorAll('.nav-item-user');
const welcomeMessage = userNavigation[0];
const addMovieBtn = document.querySelector('#add-movie-button');

export function updateAuth() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        guestNavigation.forEach(x => x.style.display = 'none');
        userNavigation.forEach(x => x.style.display = 'inline');
        addMovieBtn.style.display = 'block'
        const currentUser = JSON.parse(localStorage.user).email
        welcomeMessage.textContent = `Welcome, ${currentUser}`

    } else {
        guestNavigation.forEach(x => x.style.display = 'inline');
        userNavigation.forEach(x => x.style.display = 'none');
        addMovieBtn.style.display = 'none'
    }
}