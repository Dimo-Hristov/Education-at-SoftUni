import page from '../node_modules/page/page.mjs'
import { dashboardView } from './views/dashboardView.js';
import { registerView } from './views/registerView.js';


export const updateNav = () => {
    const guestView = document.getElementById('guest');
    const userView = document.getElementById('user');

    if (localStorage.getItem('user')) {
        guestView.style.display = 'none';
        userView.style.display = 'inline';
    } else {
        guestView.style.display = 'inline';
        userView.style.display = 'none';
    }
}


// start the page
updateNav();


page('/', dashboardView)
page('/register', registerView)


page.start()