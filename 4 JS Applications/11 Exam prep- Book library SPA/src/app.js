import page from '../node_modules/page/page.mjs'
import { addBookView } from './views/addBookView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { myBooksView } from './views/myBooksView.js';
import { registerView } from './views/registerView.js';


export const updateNav = () => {
    const guestView = document.getElementById('guest');
    const userView = document.getElementById('user');

    if (localStorage.getItem('user')) {
        guestView.style.display = 'none';
        userView.style.display = 'inline';
        const userEmail = JSON.parse(localStorage.getItem('user')).email
        userView.querySelector('span').textContent = `Welcome, ${userEmail}`
    } else {
        guestView.style.display = 'inline';
        userView.style.display = 'none';
    }
}


// start the page
updateNav();


page('/', dashboardView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutView);
page('/my-books', myBooksView);
page('/add-book', addBookView);
page('/details/:id', detailsView);
page('/edit/:id', editView)


page.start();