import { router } from './router.js';

const guestNavigation = document.getElementById('guest');
const userNavigation = document.getElementById('user');
guestNavigation.style.display = 'inline';
userNavigation.style.display = 'inline';

const navigationElement = document.querySelector('.navigation');
navigationElement.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.tagName == 'A') {
        const url = new URL(e.target.href);
        router(url.pathname);
    }
})