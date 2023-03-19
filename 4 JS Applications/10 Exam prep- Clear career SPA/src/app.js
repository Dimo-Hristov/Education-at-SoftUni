import page from '../node_modules/page/page.mjs'
import { logoutUser } from './api/users.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import { renderContentMiddleware, renderNavBar } from './middleware/renderMiddleware.js';
import { createView } from './views/createView.js';
import { dashboardView } from './views/dashboardView.js';
import { homeView } from "./views/homeView.js";
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavBar);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/dashboard', dashboardView);
page('/create', createView)


page.start();