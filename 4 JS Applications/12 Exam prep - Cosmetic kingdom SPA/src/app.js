import page from '../node_modules/page/page.mjs'
import { deleteProduct } from './api/data.js';
import { logoutUser } from './api/users.js';
import { authMiddleware } from "./middleware/authMiddleware.js";
import { redirectMiddleware, renderContentMiddleware, renderNavBar } from "./middleware/renderMiddleware.js";
import { addProductView } from './views/addProductView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from "./views/homeView.js";
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavBar);
page(renderContentMiddleware);
page(redirectMiddleware);

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutUser);
page('/dashboard', dashboardView);
page('/add', addProductView);
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/delete/:id', deleteProduct)


page.start();