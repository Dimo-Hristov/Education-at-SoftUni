import page from '../node_modules/page/page.mjs'
import { authMiddleware } from "./middleware/authMiddleware.js";
import { redirectMiddleware, renderContentMiddleware, renderNavBar } from "./middleware/renderMiddleware.js";
import { homeView } from "./views/homeView.js";
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';

page(authMiddleware);
page(renderNavBar);
page(renderContentMiddleware);
page(redirectMiddleware);

page('/', homeView);
page('/register', registerView);
page('/login', loginView)


page.start();