import page from '../node_modules/page/page.mjs'
import { deleteMovie } from './api/data.js';
import { logoutUser } from './api/users.js';
import { addBookView } from './views/addBookView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { myBooksView } from './views/myBooksView.js';
import { updateNav } from './views/navigationView.js';
import { registerView } from './views/registerView.js';



// start the page
page(updateNav);


page('/', dashboardView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutUser);
page('/my-books', myBooksView);
page('/add-book', addBookView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteMovie);
page('/my-books', myBooksView);


page.start();